import { Component, OnInit, ChangeDetectionStrategy, Input, Inject, ViewChild, HostBinding, Output, EventEmitter, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { OrisValueRepositoryProvider } from '../../../oris-client/oris-value-repository/oris-value-repository.service';
import { OrisValue } from '../../../oris-client/oris-value.model';
import { ScriptService } from '../../../script/script.service';
import { IOrisValueRepository } from '../../../oris-client/oris-value-repository/oris-value-repository.interface';
import { Constants } from 'src/shared/constants';
import { IDictionary } from 'src/shared/dictionary/dictionary.interface';
import { DoTooltipService } from 'src/shared/oris-gtc/do-tooltip.service';

declare var AdobeAn: any;
declare var createjs: any;

@Component({
  selector: 'app-sonde-t-rf-pop-up-alarmes',
  templateUrl: './sonde-t-rf-pop-up-alarmes.component.html',
  styleUrls: ['./sonde-t-rf-pop-up-alarmes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScriptService,DoTooltipService]  
})

export class SondeTRfPopUpAlarmesComponent implements OnInit {
      private _mnemonicRoot: string | null = null;
      private readonly _orisValueSubscriptions: Subscription[] = [];
      private readonly _orisValueByShortMnemonic: IDictionary<OrisValue> = {};
      private _title: string = "";   
      private _anim: any;
       
      @ViewChild("canvas") private readonly _canvas: ElementRef | undefined;
      @ViewChild("sINPUT1") private _sINPUT1: any;
      @ViewChild("sINPUT2") private _sINPUT2: any;
      @ViewChild("sINPUT3") private _sINPUT3: any;
      @ViewChild("sINPUT4") private _sINPUT4: any;
      @ViewChild("sINPUT5") private _sINPUT5: any;
      @ViewChild("sINPUT6") private _sINPUT6: any;
      @ViewChild("sINPUT7") private _sINPUT7: any;
      @ViewChild("sINPUT8") private _sINPUT8: any;
      @ViewChild("sINPUT9") private _sINPUT9: any;


      private _initialZIndex: number | string | null = null;
      @HostBinding("style.z-index") _zIndex: number | string | null = null;
      private _isVisible: boolean = false;
      private _nPass: any;
      private _aResultTC:any=[];
  

      @Output() public closed: EventEmitter<void> = new EventEmitter();
  
      constructor(
          private readonly  _DoTooltip: DoTooltipService,
          private readonly _scriptService: ScriptService,
          @Inject(OrisValueRepositoryProvider) private readonly _orisValueRepository: IOrisValueRepository,
          private readonly _changeDetectorRef: ChangeDetectorRef) {
      }

     async ngOnInit() {
            await this._scriptService.load("createjs");
            await this._scriptService.load("sonde-t-rf-pop-up-alarmes");
    
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
            const shortMnemonics = [ "ActAlrmHaute", "ActAlrmBasse", "ActAlrmPui","ActAlrmRSB", "ActAlrmStatDef", 
                                      "SeuilAlarmeHaute", "SeuilAlarmeBasse", "SeuilAlarmeRSB","SeuilAlarmePui", 
                                      "TempoAlarmeHaute", "TempoAlarmeBasse", "TempoAlarmeDef", "TempoAlarmeRSB", "TempoAlarmePui"];  

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
      
          if(this.isVisible){
                const anim = this._anim;
                if (!anim)
                    return;
                //console.log("tryUpdateAnim()");
                // === btFermer + boutons TC
                if (this._nPass!=1){
                  anim.mcPopUP.btFermer.addEventListener('click', this.onClosePopUp.bind(this));  
                  // TC
                  this.onClickTeleCommand (anim.mcPopUP.mcTC_SeuilHaut_T,"ActAlrmHaute"); 
                  this.onClickTeleCommand (anim.mcPopUP.mcTC_SeuilBas_T,"ActAlrmBasse"); 
                  this.onClickTeleCommand (anim.mcPopUP.mcTC_SeuilBas_PS,"ActAlrmPui");
                  this.onClickTeleCommand (anim.mcPopUP.mcTC_SeuilBas_QS,"ActAlrmRSB");
                  this.onClickTeleCommand (anim.mcPopUP.mcTC_RB,"ActAlrmStatDef");
                  // TR                  
                  this.onClickTeleReglage (anim.mcPopUP.mcTR_SeuilHaut_T.mcTR_T,"TempoAlarmeHaute",this._sINPUT1); 
                  this.onClickTeleReglage (anim.mcPopUP.mcTR_SeuilHaut_T.mcTR_S,"SeuilAlarmeHaute",this._sINPUT2);  
                  this.onClickTeleReglage (anim.mcPopUP.mcTR_SeuilBas_T.mcTR_T,"TempoAlarmeBasse",this._sINPUT3);  
                  this.onClickTeleReglage (anim.mcPopUP.mcTR_SeuilBas_T.mcTR_S,"SeuilAlarmeBasse",this._sINPUT4); 
                  this.onClickTeleReglage (anim.mcPopUP.mcTR_SeuilBas_PS.mcTR_T,"TempoAlarmePui",this._sINPUT5);  
                  this.onClickTeleReglage (anim.mcPopUP.mcTR_SeuilBas_PS.mcTR_S,"TempoAlarmePui",this._sINPUT6);  
                  this.onClickTeleReglage (anim.mcPopUP.mcTR_SeuilBas_QS.mcTR_T,"TempoAlarmeRSB",this._sINPUT7);  
                  this.onClickTeleReglage (anim.mcPopUP.mcTR_SeuilBas_QS.mcTR_S,"SeuilAlarmeRSB",this._sINPUT8);  
                  this.onClickTeleReglage (anim.mcPopUP.mcTR_TempoAvant.mcTR_T,"TempoAlarmeDef",this._sINPUT9);    
                  this._nPass=1;
                } 
                // === titre
                anim.mcPopUP.sTitre.text = "REGLAGES ALARMES "+this.title;

                // TC "ActAlrmHaute", "ActAlrmBasse", "ActAlrmPui","ActAlrmRSB", "ActAlrmStatDef"
                const actAlrmHauteValue = this.getOrisValue("ActAlrmHaute");
                const actAlrmBasseValue = this.getOrisValue("ActAlrmBasse");            
                const actAlrmPuiValue = this.getOrisValue("ActAlrmPui");
                const actAlrmRSBValue = this.getOrisValue("ActAlrmRSB");
                const actAlrmStatDefValue = this.getOrisValue("ActAlrmStatDef");
                this._aResultTC["ActAlrmHaute"]=`${actAlrmHauteValue.asNumber()}`;
                this._aResultTC["ActAlrmBasse"]=`${actAlrmBasseValue.asNumber()}`;
                this._aResultTC["ActAlrmPui"]=`${actAlrmPuiValue.asNumber()}`;
                this._aResultTC["ActAlrmRSB"]=`${actAlrmRSBValue.asNumber()}`;
                this._aResultTC["ActAlrmStatDef"]=`${actAlrmStatDefValue.asNumber()}`;
                              
                this.showTeleCommand( this._aResultTC["ActAlrmHaute"],anim.mcPopUP.mcTC_SeuilHaut_T,anim.mcPopUP.mcTR_SeuilHaut_T,this._sINPUT1,this._sINPUT2);
                this.showTeleCommand(this._aResultTC["ActAlrmBasse"],anim.mcPopUP.mcTC_SeuilBas_T,anim.mcPopUP.mcTR_SeuilBas_T,this._sINPUT3,this._sINPUT4);              
                this.showTeleCommand(this._aResultTC["ActAlrmPui"],anim.mcPopUP.mcTC_SeuilBas_PS,anim.mcPopUP.mcTR_SeuilBas_PS,this._sINPUT5,this._sINPUT6); 
                this.showTeleCommand(this._aResultTC["ActAlrmRSB"],anim.mcPopUP.mcTC_SeuilBas_QS,anim.mcPopUP.mcTR_SeuilBas_QS,this._sINPUT7,this._sINPUT8); 
                this.showTeleCommand(this._aResultTC["ActAlrmStatDef"],anim.mcPopUP.mcTC_RB,anim.mcPopUP.mcTR_TempoAvant,this._sINPUT9,null);  
            
                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.btInfo_TC_SeuilHaut_T,actAlrmHauteValue,this._mnemonicRoot+".ActAlrmHaute");
                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.btInfo_TC_SeuilBas_T,actAlrmBasseValue,this._mnemonicRoot+".ActAlrmBasse");
                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.btInfo_TC_SeuilBas_PS,actAlrmPuiValue,this._mnemonicRoot+".ActAlrmPui");
                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.btInfo_TC_SeuilBas_QS,actAlrmRSBValue,this._mnemonicRoot+".ActAlrmRSB");
                this._DoTooltip.mouseEnterMouseLeave(anim.mcPopUP.btInfo_mcTC_RB,actAlrmStatDefValue,this._mnemonicRoot+".ActAlrmStatDef");
         
                // TR
                this.iniTeleReglage("SeuilAlarmeHaute",this._sINPUT1,anim.mcPopUP.btInfoTR_SeuilHaut_T,this._aResultTC["ActAlrmHaute"]);  
                this.iniTeleReglage("TempoAlarmeHaute",this._sINPUT2,anim.mcPopUP.btInfoTR_SeuilHaut_S,this._aResultTC["ActAlrmHaute"]);  
                this.iniTeleReglage("SeuilAlarmeBasse",this._sINPUT3,anim.mcPopUP.btInfoTR_SeuilBas_T,this._aResultTC["ActAlrmBasse"]); 
                this.iniTeleReglage("TempoAlarmeBasse",this._sINPUT4,anim.mcPopUP.btInfoTR_SeuilBas_S,this._aResultTC["ActAlrmBasse"]);  
                
                this.iniTeleReglage("SeuilAlarmePui",this._sINPUT5,anim.mcPopUP.btInfoTR_SeuilBas_PS_T,this._aResultTC["ActAlrmPui"]);   
                this.iniTeleReglage("TempoAlarmePui",this._sINPUT6,anim.mcPopUP.btInfoTR_SeuilBas_PS_S,this._aResultTC["ActAlrmPui"]);   
                this.iniTeleReglage("SeuilAlarmeRSB",this._sINPUT7,anim.mcPopUP.btInfoTR_SeuilBas_QS_T,this._aResultTC["ActAlrmRSB"]);   
                this.iniTeleReglage("TempoAlarmeRSB",this._sINPUT8,anim.mcPopUP.btInfoTR_SeuilBas_QS_S,this._aResultTC["ActAlrmRSB"]);                   
                this.iniTeleReglage("TempoAlarmeDef",this._sINPUT9,anim.mcPopUP.btInfoTR_TempoAvant_T,this._aResultTC["ActAlrmStatDef"]);   
      
                // anim.getStage().update();
              } // Fin isVisible              
        }

      private showHideTR_INPUT(target1:any,target2:any,sVal:string){   
        let data:any;        
          data =target1.nativeElement;
          data.style.display=sVal;
          if(target2){
           data =target2.nativeElement;
            data.style.display=sVal;
          }      
          data=null;
      }

      private iniTeleReglage(sProp:any,target:any,mcCible:any,sValTC:string){   

        const sTRValue = this.getOrisValue(sProp);  
        var value=`${sTRValue.asNumber() || ""}`
        let data = target.nativeElement; 

        this.gestionFocus(data);
        if (!data.bFocus) {	
          data.value=value;
        }	
        data = null;   

        if(sValTC=="1"){
          mcCible.visible=true;
          this._DoTooltip.mouseEnterMouseLeave(mcCible,sTRValue,this._mnemonicRoot+"."+sProp);
        }else{
          mcCible.visible=false;
        }
     }

  
       private onClickTeleReglage(mcCibleTR:any,sProp:any,target:any){   
          var _this=this;
          mcCibleTR.btOK.addEventListener('click', function () {
           
            // WRITE TR   
             let data = target.nativeElement;
             var sVal:string=data.value;          
             if(_this._mnemonicRoot){    
                 var sMnemo:string=_this._mnemonicRoot+"."+sProp;
                 _this._orisValueRepository.beginSetValue(sMnemo, sVal);
                //alert("val="+sVal +" mnemo="+sMnemo); 
             } 
             data = null;                       
          })
       }


        private showTeleCommand(sValue:String,mcCibleTC:any,mcCibleTR:any,target1:any,target2:any) {
           if(sValue=="1"){
               mcCibleTC.gotoAndStop(0);// Activé  
               mcCibleTR.visible=true;  
               this.showHideTR_INPUT(target1,target2,"block");                      
           }else if(sValue=="0"){
               mcCibleTC.gotoAndStop(1);// Désavctivé
               mcCibleTR.visible=false;  
               this.showHideTR_INPUT(target1,target2,"none");                           
           }else{
              mcCibleTC.gotoAndStop(2);
              mcCibleTR.visible=false;   
              this.showHideTR_INPUT(target1,target2,"none");                       
           }
        }        
        private onClickTeleCommand  (mcCibleTC:any,sProp:any){           
          if(this._mnemonicRoot){ 
            var _this=this;
            var sMnemo:string=this._mnemonicRoot+"."+sProp;    
            mcCibleTC.addEventListener('click', function () {
              var sVal= _this._aResultTC[sProp];
                (sVal=="1") ? sVal="0" : sVal="1";
               // alert("val="+sVal +" mnemo="+sMnemo); 
                _this._orisValueRepository.beginSetValue(sMnemo, sVal);
            })	 
         }  
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
              this.iniINPUT("none"); 
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
                this.iniINPUT("block");
                this.tryUpdateAnim();                     
            }
            else {          
                this.onClosePopUp();
            }
    
            this._changeDetectorRef.markForCheck(); // demande le refresh du composant par Angular (requis car en mode "ChangeDetectionStrategy.OnPush" pour opti perf)
        }


        private iniINPUT(sVal:string){
          this.showHideTR_INPUT(this._sINPUT1,this._sINPUT2,sVal);  
          this.showHideTR_INPUT(this._sINPUT3,this._sINPUT4,sVal);  
          this.showHideTR_INPUT(this._sINPUT5,this._sINPUT6,sVal);  
          this.showHideTR_INPUT(this._sINPUT7,this._sINPUT8,sVal);  
          this.showHideTR_INPUT(this._sINPUT9,null,sVal); 
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
      
    
        private anim_handleComplete(evt:any,comp: any) {
            if (!this._canvas)
                return;
  
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var lib = comp.getLibrary();
            const exportRoot = new lib.sondetrfpopupalarmes();
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
