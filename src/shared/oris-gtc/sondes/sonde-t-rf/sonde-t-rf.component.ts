import { Component, OnInit, ChangeDetectionStrategy, Input, Inject, ViewChild, HostBinding, Output, EventEmitter, ChangeDetectorRef, ElementRef, OnDestroy, ɵConsole } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { OrisValueRepositoryProvider } from '../../../oris-client/oris-value-repository/oris-value-repository.service';
import { OrisValue } from '../../../oris-client/oris-value.model';
import { ScriptService } from '../../../script/script.service';
import { IOrisValueRepository } from '../../../oris-client/oris-value-repository/oris-value-repository.interface';
import { Constants } from 'src/shared/constants';
import { IDictionary } from 'src/shared/dictionary/dictionary.interface';
import { SondeTRfPopUpComponent } from 'src/shared/oris-gtc/sondes/sonde-t-rf-pop-up/sonde-t-rf-pop-up.component';
import { DoTooltipService } from 'src/shared/oris-gtc/do-tooltip.service';

declare var AdobeAn: any;
declare var createjs: any;

@Component({
  selector: 'app-sonde-t-rf',
  templateUrl: './sonde-t-rf.component.html',
  styleUrls: ['./sonde-t-rf.component.css','../../tooltip.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScriptService,DoTooltipService]
})
export class SondeTRfComponent implements OnInit {

      private _mnemonicRoot: string | null = null;
      private readonly _orisValueSubscriptions: Subscription[] = [];
      private readonly _orisValueByShortMnemonic: IDictionary<OrisValue> = {};
      private _title: string = ""; 
      private _anim: any;
      @ViewChild("sondeTRFCanvas") private readonly _canvas: ElementRef | undefined;
      @ViewChild("popUpSondeTRF") private readonly _popUpSondeTRF: SondeTRfPopUpComponent | undefined;
      private _initialZIndex: number | string | null = null;
      @HostBinding("style.z-index") _zIndex: number | string | null = null;
      private _isVisible: boolean = false;
      private _nPass: any;
  
      @Output() public closed: EventEmitter<void> = new EventEmitter();
  
      constructor(
          private readonly  _DoTooltip: DoTooltipService,       
          private readonly _scriptService: ScriptService,
          @Inject(OrisValueRepositoryProvider) private readonly _orisValueRepository: IOrisValueRepository,
          private readonly _changeDetectorRef: ChangeDetectorRef) {
      }
  
      async ngOnInit() {
          await this._scriptService.load("createjs")
          await this._scriptService.load("sonde-t-rf");  
          var comp = AdobeAn.getComposition("D6624C4551F316468B501D5D33AE6DA0");
          this._anim = this.anim_handleComplete(comp);
          this.tryUpdateAnim();
      }
  
      ngOnDestroy(): void {
          this.disposeOrisValueSubscriptions();
      }
  
      public get mnemonicRoot(): string | null {
          return this._mnemonicRoot;
      }
   
      @Input()  
      public set mnemonicRoot(value: string | null) {
          if (this._mnemonicRoot !== value) {
              this.disposeOrisValueSubscriptions();
              if (value)
                  this.initOrisValueSubscriptions(value);
                  
              this._mnemonicRoot = value;
              this._changeDetectorRef.markForCheck();
          }
      }
  
      private disposeOrisValueSubscriptions(): void {
          const subscriptions = this._orisValueSubscriptions;
          subscriptions.forEach(s => s.unsubscribe());
          subscriptions.splice(0, subscriptions.length); // clears the array
      }
  
      private initOrisValueSubscriptions(rootMnemonic: string): void {
          const shortMnemonics = [ "MesCor", "StatDef", "AlarmeHaute", "AlarmeBasse", "AlarmePui", "AlarmeRSB", "PuiSign", "RSB"];
          shortMnemonics.forEach(shortMnemonic => {
              const fullMnemonic: string = `${rootMnemonic}.${shortMnemonic}`;
              const orisValueObservable: Observable<OrisValue> = this._orisValueRepository.getValue(fullMnemonic);
              const subscription: Subscription = orisValueObservable.subscribe(nextValue => this.onNextOrisValue(shortMnemonic, nextValue));
              this._orisValueSubscriptions.push(subscription);
          })
      }
  

      // proxy vers la popUp enfant (nécessaire pour transmettre les changements de valeur)
      public get popUpTitle(): string {
        return this._popUpSondeTRF ? this._popUpSondeTRF.title : "";
      }
      @Input()
      public set popUpTitle(value: string) {
        if (this._popUpSondeTRF) {          
          this._popUpSondeTRF.title = value;
        }
      }

      private onNextOrisValue(shortMnemonic: string, value: OrisValue) {
          this._orisValueByShortMnemonic[shortMnemonic] = value;
          this.tryUpdateAnim();
      }
  
      private getOrisValue(shortMnemonic: string) {
          return this._orisValueByShortMnemonic[shortMnemonic] || OrisValue.empty;
      }
  
      private tryUpdateAnim(): void {
          const anim = this._anim;
          if (!anim)
              return;
  
          // === btSonde
          if (this._nPass!=1){
            anim.btSonde.addEventListener('click', this.onClikOpenPopUp.bind(this));      
            this._nPass=1;
          }            
          // === MesCor
          const temperatureValue = this.getOrisValue("MesCor");     
          anim.mcTM_T.sValue.text = `${temperatureValue.asNumber() || ""} °C`; // temperatureValue.unit;

          this._DoTooltip.mouseEnterMouseLeave(anim.mcTM_T,temperatureValue,this._mnemonicRoot+".MesCor");
             
          /* === "PuiSign", "SRSB"]
            si >-50dBm ou >6 dB =VERT
            si <-50 et >-80 dBm ou <6 et >-6 dB ORANGE
            si <-80 dBm ou <-6dB ROUGE         */

           const puissanceSignalValue = this.getOrisValue("PuiSign");
           const rapportSignalBrutValue = this.getOrisValue("RSB");
           var nPuiSign=`${puissanceSignalValue.asNumber()}`;
           var nRSB=`${rapportSignalBrutValue.asNumber()}`;
           var ndBm:Number=4;// Vide;
           var ndB:Number=4;// Vide;
           var nImage:Number=4;// Vide;
          
           if(Number(nPuiSign)>=-50){        
                ndBm=1;// Vert
            } else if(Number(nPuiSign)<-50 && Number(nPuiSign)>-80){   
                ndBm=2;// Orange
            } else if(Number(nPuiSign)<=-80){   
                ndBm=3;// rouge
           }
           if(Number(nRSB)>=6){        
                ndB=1;// Vert
            } else if(Number(nRSB)<6 && Number(nRSB)>-6){   
                ndB=2;// Orange
            } else if(Number(nRSB)<=-6){   
                ndB=3;// rouge
          }
          if(ndBm==ndB)
            nImage=ndBm;

          if(ndBm<ndB)
            nImage=ndB;

          if(ndB<ndBm)
            nImage=ndBm;
          

          anim.mcFr.gotoAndStop(nImage);

          // === "StatDef", "AlarmeHaute", "AlarmeBasse", "AlarmePui", "AlarmeRSB"
           const statDefValue = this.getOrisValue("StatDef");
           const alarmeHauteValue = this.getOrisValue("AlarmeHaute");
           const alarmeBasseValue = this.getOrisValue("AlarmeBasse");
           const alarmePuiValue = this.getOrisValue("AlarmePui");
           const alarmeRSBValue = this.getOrisValue("AlarmeRSB");
           var nStatDef=`${statDefValue.asNumber()}`;
           var nAlarmeHaute=`${alarmeHauteValue.asNumber()}`;
           var nAlarmeBasse=`${alarmeBasseValue.asNumber()}`;
           var nAlarmePui=`${alarmePuiValue.asNumber()}`;
           var nAlarmeRSB=`${alarmeRSBValue.asNumber()}`;

         //  anim.mcTM_T.gotoAndStop(0);
           if(nStatDef=="1" || nAlarmeHaute=="1" || nAlarmeBasse=="1" || nAlarmePui=="1" || nAlarmeRSB=="1"){
              anim.mcTM_T.gotoAndStop(3); // Rougle clignotant            
           }else{
               anim.mcTM_T.gotoAndStop(0); 
           }  
          // console.log(this._mnemonicRoot +" nStatDef="+nStatDef+" nAlarmeHaute="+nAlarmeHaute+" nAlarmeBasse="+nAlarmeBasse+" nAlarmePui="+nAlarmePui+" nAlarmeRSB=="+nAlarmeRSB);

         // anim.getStage().update(); // ERREUR DANS MOZILLA
      }
  
      public get isVisible(): boolean {
          return this._isVisible;
      }
      @Input()
      public set isVisible(value: boolean) {
          if (value === this._isVisible)
              return;
  
          if (value) {
              this._initialZIndex = this._zIndex;
              this._zIndex = Constants.ZIndexMaxValue;
              this._isVisible = true;
          }
          else {
              this._isVisible = false;
              this._zIndex = this._initialZIndex;
              this.closed.emit(); // émission de l'event onClosed
          }
  
          this._changeDetectorRef.markForCheck(); // demande le refresh du composant par Angular (requis car en mode "ChangeDetectionStrategy.OnPush" pour opti perf)
      }

  
  
      private onClikOpenPopUp(){
        this.showPopUp()
      }

      public showPopUp(): void {
        if (!this._popUpSondeTRF || this._popUpSondeTRF.isVisible)
          return;

      // le z-index de l'objet lui-même doit être changé pour que son pop-up soit au 1er plan (cf. "contextes d'empilement z-index")
      this.bringToFrontIfNeeded();
      this._popUpSondeTRF.isVisible = true;
      }

      public popUp_onClosed(): void {
        this.resetZIndexIfNeeded();
      }

      /* TODO extraire une classe de ce champ et ces deux méthodes */
      private _frontElementCount: number = 0

      private bringToFrontIfNeeded(): void {
        if (this._frontElementCount === 0) {
          this._initialZIndex = this._zIndex;
          this._zIndex = Constants.ZIndexMaxValue;
        }
        this._frontElementCount++;
      }

      private resetZIndexIfNeeded(): void {
        this._frontElementCount--;
        if (this._frontElementCount === 0)
          this._zIndex = this._initialZIndex;
      }




      private anim_handleComplete(comp: any) {
          if (!this._canvas)
              return;
  
          //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
          var lib = comp.getLibrary();
          const exportRoot = new lib.sondetrf();
          const stage = new lib.Stage(this._canvas.nativeElement);
          stage.enableMouseOver();
          const fnStartAnimation = function () {
              stage.addChild(exportRoot);
              // Animation alarme
              createjs.Ticker.setFPS(1);
              createjs.Ticker.addEventListener("tick", stage);
             // stage.update(); // ensures dispatch of a first tick event among children
          }
          AdobeAn.compositionLoaded(lib.properties.id);
          fnStartAnimation();
  
          return exportRoot;
      }
  

}
