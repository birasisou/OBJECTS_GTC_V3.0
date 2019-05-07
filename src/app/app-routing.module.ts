import { FanComponent } from './fan/fan.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimateCcComponent } from './animate-cc/animate-cc.component';
import { OverlapComponent } from './overlap/overlap.component';
import { CleopatraShellComponent } from './cleopatra/cleopatra-shell/cleopatra-shell.component';

const routes: Routes = [
  { path: "fan", component: FanComponent },
  { path: "animatecc", component: AnimateCcComponent },
  { path: "overlap", component: OverlapComponent },
  { path: "cleopatra", component: CleopatraShellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
