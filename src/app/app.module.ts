import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "../shared/shared.module";
import { AppComponent } from './app.component';
import { FanComponent } from './fan/fan.component';
import { AnimateCcComponent } from './animate-cc/animate-cc.component';
import { OverlapComponent } from './overlap/overlap.component';
import { CleopatraShellComponent } from './cleopatra/cleopatra-shell/cleopatra-shell.component';

@NgModule({
  declarations: [
    AppComponent,
	  FanComponent,
	  AnimateCcComponent,
  	OverlapComponent,
  	CleopatraShellComponent
  ],
  imports: [
    BrowserModule,
  	AppRoutingModule,
  	BrowserAnimationsModule,
  	SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
