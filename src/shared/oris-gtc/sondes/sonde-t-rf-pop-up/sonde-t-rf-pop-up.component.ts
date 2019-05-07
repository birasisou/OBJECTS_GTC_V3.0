
import { Component, OnInit, ChangeDetectionStrategy, Input, Inject, ViewChild, HostBinding, Output, EventEmitter, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { OrisValueRepositoryProvider } from '../../../oris-client/oris-value-repository/oris-value-repository.service';
import { OrisValue } from '../../../oris-client/oris-value.model';
import { ScriptService } from '../../../script/script.service';
import { IOrisValueRepository } from '../../../oris-client/oris-value-repository/oris-value-repository.interface';
import { Constants } from 'src/shared/constants';
import { IDictionary } from 'src/shared/dictionary/dictionary.interface';
import { SondeTRfPopUpAlarmesComponent } from 'src/shared/oris-gtc/sondes/sonde-t-rf-pop-up-alarmes/sonde-t-rf-pop-up-alarmes.component';
import { DoTooltipService } from 'src/shared/oris-gtc/do-tooltip.service';

declare var AdobeAn: any;
declare var createjs: any;

@Component({
  selector: 'app-sonde-t-rf-pop-up',
  templateUrl: './sonde-t-rf-pop-up.component.html',
  styleUrls: ['./sonde-t-rf-pop-up.component.css','../../tooltip.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScriptService,DoTooltipService]  
})

export class SondeTRfPopUpComponent implements OnInit {

      private _mnemonicRoot: string | null = null;
      private readonly _orisValueSubscriptions: Subscription[] = [];
      private readonly _orisValueByShortMnemonic: IDictionary<OrisValue> = {};
      private _title: string = "";   
      private _anim: any;
 

      @ViewChild("canvas") private readonly _canvas: ElementRef | undefined;
      @ViewChild("tip") private readonly _tip: ElementRef | undefined;
      @ViewChild("sINPUT_Offset") private _sINPUT_Offset: any;
      @ViewChild("popUpSondeTRF_Alarmes") private readonly _popUpSondeTRF_Alarmes: SondeTRfPopUpAlarmesComponent | undefined;

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
          await this._scriptService.load("createjs");
          await this._scriptService.load("sonde-t-rf-pop-up");
  
          var comp = AdobeAn.getComposition("D6624C4551F316468B501D5D33AE6DA0");
          //this._anim = this.anim_handleComplete(comp);
          var _this=this;
      
          var lib=comp.getLibrary();
          lib.properties = {
            manifest: [
              {src:"assets/animateCC/components/lib/jquery-2.2.4.min.js?1552320327717", id:"lib/jquery-2.2.4.min.js"},
              {src:"assets/animateCC/components/sdk/anwidget.js?1552320327717", id:"sdk/anwidget.js"},
              {src:"assets/animateCC/components/ui/src/textinput.js?1552320327717", id:"an.TextInput"}
            ]
          }; 
         
          var loader = new createjs.LoadQueue(false);        
          loader.addEventListener("complete", function(evt:any){_this._anim = _this.anim_handleComplete(evt,comp)});
          var lib=comp.getLibrary();
          loader.loadManifest(lib.properties.manifest);  
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
          const shortMnemonics = [ "MesCor", "Offset","StatDef", "AlarmeHaute", "AlarmeBasse", "AlarmePui", "AlarmeRSB", "PuiSign", "RSB"];
          shortMnemonics.forEach(shortMnemonic => {
              const fullMnemonic: string = `${rootMnemonic}.${shortMnemonic}`;
              const orisValueObservable: Observable<OrisValue> = this._orisValueRepository.getValue(fullMnemonic);
              const subscription: Subscription = orisValueObservable.subscribe(nextValue => this.onNextOrisValue(shortMnemonic, nextValue));
              this._orisValueSubscriptions.push(subscription);
          })
      }
  
      private onNextOrisValue(shortMnemonic: string, value: OrisValue) {
          this._orisValueByShortMnemonic[shortMnemonic] = value;
          this.tryUpdateAnim();
      }
  
      private getOrisValue(shortMnemonic: string) {
          return this._orisValueByShortMnemonic[shortMnemonic] || OrisValue.empty;
      }
  
      private tryUpdateAnim(): void {  

          if(this._isVisible){
              const anim = this._anim;
              if (!anim)
              return;
      
              // === btFermer
              if (this._nPass!=1){
                anim.mcPopUP.btFermer.addEventListener('click', this.onClosePopUp.bind(this));  
                anim.mcPopUP.mcTR_T.btOK.addEventListener('click', this.onClickWrite.bind(this)); 
                anim.mcPopUP.btRegAlarmes.addEventListener('click', this.onClicOpenPopUP_Alarmes.bind(this));  
                this._nPass=1;
              } 
              // === titre
                anim.mcPopUP.sTitre.text = this._title;
                

              // === TM MesCor
              const temperatureValue = this.getOrisValue("MesCor");            
              anim.mcPopUP.mcTM_T.sValue.text = `${temperatureValue.asNumber() || ""} °C`; // temperatureValue.unit;
    

              this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.mcTM_T,temperatureValue,this._mnemonicRoot+".MesCor");
             
            // === TR Offset 
              // TR style sINPUT dans animatecc
              const offsetValue = this.getOrisValue("Offset");  
              var value=`${offsetValue.asNumber() || ""}`
              let data = this._sINPUT_Offset.nativeElement;     
              //  data.style.display="block";
      
              this.gestionFocus(data);
              if (!data.bFocus) {	
                data.value=value;
              }	

              this._DoTooltip.mouseEnterMouseLeave(anim.btOffset,offsetValue,this._mnemonicRoot+".Offset");
            





              /* === TM "PuiSign", "SRSB"]
                si >-50dBm ou >6 dB =VERT
                si <-50 et >-80 dBm ou <6 et >-6 dB ORANGE
                si <-80 dBm ou <-6dB ROUGE         */

                const puissanceSignalValue = this.getOrisValue("PuiSign");
                const rapportSignalBrutValue = this.getOrisValue("RSB");
                var nPuiSign=`${puissanceSignalValue.asNumber()}`;
                var nRSB=`${rapportSignalBrutValue.asNumber()}`;
                var ndBm:Number=4;// Vide;
                var ndB:Number=4;// Vide;

                anim.mcPopUP.mcTM_dBm.sValue.text =`${puissanceSignalValue.asNumber() || " dBm"} `;
                anim.mcPopUP.mcTM_dB.sValue.text = `${rapportSignalBrutValue.asNumber() || " dB"} `;

                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.mcTM_dBm,puissanceSignalValue,this._mnemonicRoot+".PuiSign");
                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.mcTM_dB,rapportSignalBrutValue,this._mnemonicRoot+".RSB");

                       
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

              anim.mcPopUP.mcF1.gotoAndStop(ndBm);
              anim.mcPopUP.mcF2.gotoAndStop(ndB);
    
              // === TS "StatDef", "AlarmeHaute", "AlarmeBasse", "AlarmePui", "AlarmeRSB"
                const statDefValue = this.getOrisValue("StatDef");
                const alarmeHauteValue = this.getOrisValue("AlarmeHaute");
                const alarmeBasseValue = this.getOrisValue("AlarmeBasse");
                const alarmePuiValue = this.getOrisValue("AlarmePui");
                const alarmeRSBValue = this.getOrisValue("AlarmeRSB");
                var sStatDef=`${statDefValue.asNumber()}`;
                var sAlarmeHaute=`${alarmeHauteValue.asNumber()}`;
                var sAlarmeBasse=`${alarmeBasseValue.asNumber()}`;
                var sAlarmePui=`${alarmePuiValue.asNumber()}`;
                var sAlarmeRSB=`${alarmeRSBValue.asNumber()}`;
    
                this.showDefault( anim.mcPopUP.mcTSD_1,sStatDef);
                this.showDefault( anim.mcPopUP.mcTSD_2,sAlarmeHaute);
                this.showDefault( anim.mcPopUP.mcTSD_3,sAlarmeBasse);
                this.showDefault( anim.mcPopUP.mcTSD_4,sAlarmePui);
                this.showDefault( anim.mcPopUP.mcTSD_5,sAlarmeRSB);   

                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.mcTSD_1,statDefValue,this._mnemonicRoot+".StatDef");
                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.mcTSD_2,alarmeHauteValue,this._mnemonicRoot+".AlarmeHaute");
                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.mcTSD_3,alarmeBasseValue,this._mnemonicRoot+".AlarmeBasse");
                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.mcTSD_4,alarmePuiValue,this._mnemonicRoot+".AlarmePui");
                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.mcTSD_5,alarmeRSBValue,this._mnemonicRoot+".AlarmeRSB");
                                
                if(sStatDef=="1" || sAlarmeHaute=="1" || sAlarmeBasse=="1" || sAlarmePui=="1" || sAlarmeRSB=="1"){
                  anim.mcPopUP.mcTM_T.gotoAndStop(3); // Rougle clignotant            
              }else{
                anim.mcPopUP.mcTM_T.gotoAndStop(0); 
              }  

              // console.log(this._mnemonicRoot +" nStatDef="+sStatDef+" nAlarmeHaute="+sAlarmeHaute+" nAlarmeBasse="+sAlarmeBasse+" nAlarmePui="+sAlarmePui+" nAlarmeRSB=="+sAlarmeRSB);
              anim.getStage().update();
          }// Fin isVisible
      }

   

        private gestionFocus(target:any) {
            target.onfocus = function () {
              target.style.backgroundColor = "#FFFFCC";
              target.bFocus=true;		
            }
            target.onblur = function () {
              target.style.backgroundColor = "#FFFFFF";
              target.bFocus=false;
            }
        }

        private  onClicOpenPopUP_Alarmes(){  
               this.showPopUp();
        }

        private onClickWrite(event:any) {   
          // write
          let data = this._sINPUT_Offset.nativeElement;

          var sVal:string=data.value;
          if(this._mnemonicRoot){      
              var sMnemo:string=this._mnemonicRoot+".Offset";
              this._orisValueRepository.beginSetValue(sMnemo, sVal);
              // alert("val="+sVal +" mnemo="+sMnemo);             
              this._nPass=0;
          }    
      }


      private showDefault(mcCible:any,sStatus:string){        
          if(sStatus=="1") {            
              mcCible.gotoAndStop(1); // Rouge
          }else if(sStatus=="0") {           
            mcCible.gotoAndStop(0);  // Vert
          }else{           
            mcCible.gotoAndStop(2);  // Orange clignotant
          }
        }
  
       private onClosePopUp(){       
              
            this._isVisible = false;
            this._zIndex = this._initialZIndex;
            this.closed.emit(); // émission de l'event onClosed  
            let data = this._sINPUT_Offset.nativeElement;     
            data.style.display="none";
            data=null;

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
              let data = this._sINPUT_Offset.nativeElement;     
              data.style.display="block"; 
              this.tryUpdateAnim();             
          }
          else {          
              this.onClosePopUp();
          }
  
          this._changeDetectorRef.markForCheck(); // demande le refresh du composant par Angular (requis car en mode "ChangeDetectionStrategy.OnPush" pour opti perf)
      }

  
      public get title(): string {
          return this._title;
      }
      @Input()
      public set title(value: string) {
          if (this._title !== value) {
              this._title = value;
              this.tryUpdateAnim();
          }
      }

      public showPopUp(): void {
        if (!this._popUpSondeTRF_Alarmes || this._popUpSondeTRF_Alarmes.isVisible)
          return;

      // le z-index de l'objet lui-même doit être changé pour que son pop-up soit au 1er plan (cf. "contextes d'empilement z-index")
      this.bringToFrontIfNeeded();
      this._popUpSondeTRF_Alarmes.isVisible = true;
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


      private anim_handleComplete(evt:any,comp: any) {
          if (!this._canvas)
              return;

          //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
          var lib = comp.getLibrary();
          const exportRoot = new lib.sondetrfpopup();
          const stage = new lib.Stage(this._canvas.nativeElement);
          stage.enableMouseOver();
          const fnStartAnimation = function () {
              stage.addChild(exportRoot);
                // Animation alarme
                createjs.Ticker.setFPS(1);
                createjs.Ticker.addEventListener("tick", stage);
              //  stage.update(); // ensures dispatch of a first tick event among children
          }
          AdobeAn.compositionLoaded(lib.properties.id);
          fnStartAnimation();
  
          return exportRoot;
      }
  

}
