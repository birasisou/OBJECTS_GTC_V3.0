import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FanCssComponent } from "./fan-css/fan-css.component";
import { FanNgAnimationComponent } from "./fan-ng-animation/fan-ng-animation.component";
import { FanCanvasComponent } from './fan-canvas/fan-canvas.component';
import { ButtonComponent } from './button/button.component';
import { TextWithTooltipComponent } from './text-with-tooltip/text-with-tooltip.component';
import { TmTemperatureComponent } from './tele-mesure/tm-temperature/tm-temperature.component';
import { TrPressionComponent } from './tele-reglage/tr-pression/tr-pression.component';
import { PopUpTemperatureComponent } from './pop-up/pop-up-temperature/pop-up-temperature.component';
import { SondeTRfComponent} from './oris-gtc/sondes/sonde-t-rf/sonde-t-rf.component';
import { SondeTRfPopUpComponent } from './oris-gtc/sondes/sonde-t-rf-pop-up/sonde-t-rf-pop-up.component';
import { SondeTRfPopUpAlarmesComponent } from './oris-gtc/sondes/sonde-t-rf-pop-up-alarmes/sonde-t-rf-pop-up-alarmes.component';
import { TmSmallComponent } from './oris-gtc/tele-mesure/tm-small/tm-small.component';

@NgModule({
  declarations: [
		FanCssComponent,
		FanNgAnimationComponent,
		FanCanvasComponent,
		ButtonComponent,
		TextWithTooltipComponent,
		TmTemperatureComponent,
		TrPressionComponent,
		PopUpTemperatureComponent,
		SondeTRfComponent,
		SondeTRfPopUpComponent,
		SondeTRfPopUpAlarmesComponent,
     	TmSmallComponent
  ],
  imports: [
	CommonModule
  ],
  exports: [
	  FanCssComponent,
	  FanNgAnimationComponent,
	  FanCanvasComponent,
	  ButtonComponent,
		TextWithTooltipComponent,
		TmTemperatureComponent,
		TrPressionComponent,
		PopUpTemperatureComponent,
		SondeTRfComponent,
		SondeTRfPopUpComponent,
		SondeTRfPopUpAlarmesComponent,
		TmSmallComponent
  ],
  entryComponents: [
		TmTemperatureComponent
  ]
})
export class SharedModule { }
