import { Component, OnInit, ChangeDetectionStrategy, Input, Inject, ElementRef, ViewChild, AfterViewInit, AfterContentInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrisValueRepositoryProvider } from '../../../oris-client/oris-value-repository/oris-value-repository.service';
import { OrisValue } from '../../../oris-client/oris-value.model';
import { ScriptService } from '../../../script/script.service';
import { IOrisValueRepository } from '../../../oris-client/oris-value-repository/oris-value-repository.interface';
import { DoTooltipService } from 'src/shared/oris-gtc/do-tooltip.service';

declare var AdobeAn: any;
declare var createjs: any;



@Component({
  selector: 'app-tm-small',
  templateUrl: './tm-small.component.html',
  styleUrls: ['./tm-small.component.css','../../tooltip.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ScriptService,DoTooltipService]
})

export class TmSmallComponent implements OnInit {

      private _mnemonic: string | null = null;
      private _unit: string | null = null;
      private _tm_smallSubscription: Subscription | null = null;
      private _telemesure: any;
      @ViewChild("canvas") private _canvas: any;
       _tm_small: OrisValue = OrisValue.empty;

      private placement: string = "bottom";
      private offset : number = 10;
 
      constructor(
          private el: ElementRef,
          private renderer: Renderer2,
          private readonly  _DoTooltip: DoTooltipService,  
          private readonly _scriptService: ScriptService,
          @Inject(OrisValueRepositoryProvider) private readonly _orisValueRepository: IOrisValueRepository) {
      }
 
      async ngOnInit() {
          await this._scriptService.load("createjs")
          await this._scriptService.load("tm-small");
  
          var comp = AdobeAn.getComposition("D6624C4551F316468B501D5D33AE6DA0");
          this._telemesure = this.handleComplete({ }, comp);
          this.trySetTelemesureValue(this._tm_small.asNumber());
      }
      
      public get mnemonic(): string | null {
          return this._mnemonic;
      }
 
   @Input()
     public set mnemonic(value: string | null) {
         if (value !== this._mnemonic) {
             if (this._tm_smallSubscription) {
                 this._tm_smallSubscription.unsubscribe()
                 this._tm_smallSubscription = null;
             }
 
             if (value) {
                 this._tm_smallSubscription = this._orisValueRepository
                     .getValue(value)
                     .subscribe(nextValue => this.onNextTemperatureValue(nextValue));
             }
 
             this._mnemonic = value;

           
         }
     }


    public get unit(): string | null {
          return this._unit;
     }
    @Input()
    public set unit(value: string | null) {
           this._unit = value;           
    }


    private onNextTemperatureValue(value: OrisValue) {
          this._tm_small = value;
          this.trySetTelemesureValue(value.asNumber());
      }
  
      private trySetTelemesureValue(value: number | null): void {
          if (!this._telemesure)
              return;
  
          this._telemesure.mcTM.sValue.text = `${value || ""} `+this._unit; // this._tm_small.unit;
          this._telemesure.getStage().update();

         if(this._mnemonic){
             this._DoTooltip.mouseEnterMouseLeave(this._telemesure.mcTM,this._tm_small,this._mnemonic);
         }
             

      }




  private handleComplete(evt: any, comp: any) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  const exportRoot = new lib.tmsmall();
  const stage = new lib.Stage(this._canvas.nativeElement);  
  stage.enableMouseOver();
  //Registers the "tick" event listener.
     const fnStartAnimation = function() {
       stage.addChild(exportRoot);
       stage.update(); // ensures dispatch of a first tick event among children
       // createjs.Ticker.setFPS(lib.properties.fps);
       // createjs.Ticker.addEventListener("tick", stage);
     }  
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
 
  return exportRoot;
  }
 
 }