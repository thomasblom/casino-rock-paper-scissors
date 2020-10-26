import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RockPaperScissorsChoice, RockPaperScissorsResult} from './rock-paper-scissors.enums';
import {RockPaperScissorsImages} from './rock-paper-scissors.assets';

@Component({
  selector: 'casino-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.scss']
})
export class RockPaperScissorsComponent {

  @Input()
  startText?: string;

  @Input()
  wonText?: string;

  @Input()
  lostText?: string;

  @Input()
  drawText?: string;

  @Input()
  tryAgainText?: string;

  @Input()
  images?: {
    rock: string;
    paper: string;
    scissors: string;
  };

  @Output()
  onPlaying: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  onGameResult: EventEmitter<RockPaperScissorsResult> = new EventEmitter<RockPaperScissorsResult>();

  readonly gameChoice = RockPaperScissorsChoice;
  readonly gameOutcome = RockPaperScissorsResult;
  readonly gameImages = RockPaperScissorsImages;

  playing: boolean;

  choice: RockPaperScissorsChoice = null;

  opponent: RockPaperScissorsChoice = null;

  result: RockPaperScissorsResult = null;

  choiceImage: string = null;
  opponentImage: string = null;

  play(choice: RockPaperScissorsChoice) {
    this.playing = true;
    this.onPlaying.emit(true);
    setTimeout(() => {
      this.choice = choice;
      const choices = Object.keys(RockPaperScissorsChoice)
        .filter((c: string) => isNaN(parseInt(c, 10)));
      const randomChoice = Math.floor(Math.random() * choices.length);
      this.opponent = RockPaperScissorsChoice[choices[randomChoice]];
      this.showResults();
    }, 1500);
  }

  private showResults() {
    this.choiceImage = this.getImage(this.choice);
    this.opponentImage = this.getImage(this.opponent);
    if (this.choice === RockPaperScissorsChoice.Rock) {
      this.result = this.opponent === RockPaperScissorsChoice.Rock ? RockPaperScissorsResult.Draw :
        this.opponent === RockPaperScissorsChoice.Paper ? RockPaperScissorsResult.Lost :
          RockPaperScissorsResult.Won;
    } else if (this.choice === RockPaperScissorsChoice.Paper) {
      this.result = this.opponent === RockPaperScissorsChoice.Paper ? RockPaperScissorsResult.Draw :
        this.opponent === RockPaperScissorsChoice.Scissors ? RockPaperScissorsResult.Lost :
          RockPaperScissorsResult.Won;
    } else if (this.choice === RockPaperScissorsChoice.Scissors) {
      this.result = this.opponent === RockPaperScissorsChoice.Scissors ? RockPaperScissorsResult.Draw :
        this.opponent === RockPaperScissorsChoice.Rock ? RockPaperScissorsResult.Lost :
          RockPaperScissorsResult.Won;
    }
    this.onGameResult.emit(this.result);
  }

  private getImage(option: RockPaperScissorsChoice) {
    switch (option) {
      case RockPaperScissorsChoice.Rock:
        return this.images?.rock ? this.images.rock : this.gameImages.rock;
      case RockPaperScissorsChoice.Paper:
        return this.images?.paper ? this.images.paper : this.gameImages.paper;
      case RockPaperScissorsChoice.Scissors:
        return this.images?.scissors ? this.images.scissors : this.gameImages.scissors;
    }
  }

  resetGame() {
    this.playing = false;
    this.result = null;
    this.choice = null;
    this.choiceImage = null;
    this.opponent = null;
    this.opponentImage = null;
    this.onPlaying.emit(false);
  }
}
