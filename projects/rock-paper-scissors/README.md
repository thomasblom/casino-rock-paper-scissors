# Rock, Paper, Scissors

This is an Angular component which provides an online implementation of a simple game of Rock, Paper, Scissors.

Latest version: _1.0.0_

![Rock, Paper, Scissors](https://raw.githubusercontent.com/thomasblom/casino-rock-paper-scissors/main/rock-paper-scissors.gif)

### Installation
```
$ npm install @ng-casino/rock-paper-scissors
```

### Usage

Basic usage of the component:
```html
<casino-rock-paper-scissors></casino-rock-paper-scissors>
```

##### Options
|                | Required | Description                                                                      |
|----------------|----------|----------------------------------------------------------------------------------|
| [startText]    | No       | The text to display at the start of the game. Default is 'Make your choice'.     |
| [wonText]      | No       | The text to display after a winning game. Default is 'You have won this game!'.  |
| [lostText]     | No       | The text to display after a losing game. Default is 'You have lost this game!'.  |
| [drawText]     | No       | The text to display after a tie. Default is 'There is no winner in this game!'.  |
| [tryAgainText] | No       | The text to display in the try again button. Default is 'Try again'.             |
| [images]       | No       | Your own images to use instead of the default rock, paper, scissors images.      |
| (onPlaying)    | No       | A callback which is called after the game has started or restarted.              |
| (onGameResult) | No       | A callback which is called after you and your opponent have made their decision. |
