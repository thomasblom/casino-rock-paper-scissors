import {NgModule} from '@angular/core';
import {RockPaperScissorsComponent} from './rock-paper-scissors.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [RockPaperScissorsComponent],
  imports: [CommonModule],
  exports: [RockPaperScissorsComponent]
})
export class RockPaperScissorsModule {
}
