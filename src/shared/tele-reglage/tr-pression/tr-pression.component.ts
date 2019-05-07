import { Component, OnInit, ChangeDetectionStrategy, Input, Inject, ElementRef, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrisValueRepositoryProvider } from '../../oris-client/oris-value-repository/oris-value-repository.service';
import { OrisValue } from '../../oris-client/oris-value.model';
import { ScriptService } from '../../script/script.service';
import { IOrisValueRepository } from '../../oris-client/oris-value-repository/oris-value-repository.interface';

declare var AdobeAn: any;
declare var createjs: any;


@Component({
  selector: 'app-tr-pression',
  templateUrl: './tr-pression.component.html',
  styleUrls: ['./tr-pression.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ ScriptService ]
})

export class TrPressionComponent implements OnInit{

  private _mnemonic: string | null = null;
  private _pressionSubscription: Subscription | null = null;
  private _telemesure: any;
  private _nPass: any;

  @ViewChild("canvas") private _canvas: any;  
  @ViewChild("sINPUT") private _sINPUT: any; 

  // @ViewChild('dom_overlay_container') private dom_overlay_container: any; 

  //  @ViewChild('dom_overlay_container') private dom_overlay_container: ElementRef;

   private _pression: OrisValue = OrisValue.empty;
          

     constructor(private readonly _scriptService: ScriptService, @Inject(OrisValueRepositoryProvider) private readonly _orisValueRepository: IOrisValueRepository) {
       
     }

    

     async ngOnInit() {
         await this._scriptService.load("createjs");  

         await this._scriptService.load("jquery"); 
         await this._scriptService.load("anwidget");  
         await this._scriptService.load("textinput"); 
         await this._scriptService.load("tr-pression");

        
        
         var comp = AdobeAn.getComposition("D6624C4551F316468B501D5D33AE6DA0");        
    
       

         this._telemesure = this.handleComplete({ }, comp);
         this.trySetTelemesureValue(this._pression.asNumber());
     }
     
     public get mnemonic(): string | null {   
         return this._mnemonic;
     }

    @Input()
    public set mnemonic(value: string | null) {
        if (value !== this._mnemonic) {
            if (this._pressionSubscription) {
                this._pressionSubscription.unsubscribe()
                this._pressionSubscription = null;
            }

            if (value) {
                this._pressionSubscription = this._orisValueRepository
                    .getValue(value)
                    .subscribe(nextValue => this.onNextTemperatureValue(nextValue));
            }
            
            this._mnemonic = value;

        }
    }

   private onNextTemperatureValue(value: OrisValue) {
         this._pression = value;
         this.trySetTelemesureValue(value.asNumber());
     }
 
     private trySetTelemesureValue(value: number | null): void {
  

         if (!this._telemesure)
             return;
 
         // TM consigne temperaure
         this._telemesure.mcTM.sText.text = `${value || ""} `+this._pression.unit;
         // Mnemo
         this._telemesure.sMnemo.text=this._mnemonic;
         // TR
         this._telemesure.mcTR.sUnit.text=this._pression.unit;
         this._telemesure.sLabel.text=this._pression.label;
       
          // TR style sINPUT dans animatecc
         let data = this._sINPUT.nativeElement;   
         data.style.textAlign="right";
         data.style.fontSize="25px";
         data.style.boxSizing= "border-Box"; 
         data.style.transform="matrix(1, 0, 0, 1, 39.0533, 42.4856)";   
         data.style.width = "111px"; 
         data.style.height= "27px";   
        // focus
         this.gestionFocus(data);
         if (!data.bFocus) {	
            data.value=value;
         }	
        // alert("TEST MNEMO ="+this._mnemonic);	
        if (this._nPass!=1){
          this._telemesure.mcTR.btOK.addEventListener('click', this.onClickWrite.bind(this)); 
          // alert(data.value);
          this._nPass=1;
        }  
        
        this._telemesure.getStage().update();
     }


private onClickWrite(event:any) {   
    // write
    let data = this._sINPUT.nativeElement;
    var sVal:string=data.value;
    if(this._mnemonic){      
        var sMnemo:string=this._mnemonic;
        this._orisValueRepository.beginSetValue(sMnemo, sVal);
        alert("val="+sVal +" mnemo="+sMnemo); 
        // this._telemesure.sINPUT[0].blur();
        this._nPass=0;
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

 private handleComplete(evt: any, comp: any) {
 //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
 var lib = comp.getLibrary();
 const exportRoot = new lib.trpression();
 const stage = new lib.Stage(this._canvas.nativeElement);  
 var dom_overlay_container = document.getElementById("dom_overlay_container");  

 //Registers the "tick" event listener.
    const fnStartAnimation = function() {
      stage.addChild(exportRoot);
      stage.update(); // ensures dispatch of a first tick event among children
     // createjs.Ticker.setFPS(lib.properties.fps);
     // createjs.Ticker.addEventListener("tick", stage);
    }  
 AdobeAn.compositionLoaded(lib.properties.id);
 fnStartAnimation();

 return exportRoot;
 }

}
