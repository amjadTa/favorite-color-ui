import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColorsVoteService } from 'src/app/services/colors-vote.service';

@Component({
  selector: 'app-colors-grid',
  templateUrl: './colors-grid.component.html',
  styleUrls: ['./colors-grid.component.scss'],
})
export class ColorsGridComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();

  progress_width = {
    red: 0,
    blue: 0,
    green: 0,
    black: 0,
    yellow: 0,
    gray: 0,
    ping: 0,
    orange: 0,
  };
  votesCount = {
    red: 0,
    blue: 0,
    green: 0,
    black: 0,
    yellow: 0,
    gray: 0,
    ping: 0,
    orange: 0,
  };

  constructor(private colorsVoteService: ColorsVoteService) {}

  ngOnInit(): void {
    this.subscription.add(this.colorsVoteService.listColorsVoteResult().subscribe(item => {
      this.colorsVoteResults(item);
    }));
  }

  colorVote(colorName) {
    this.subscription.add(this.colorsVoteService.colorsVoted(colorName).subscribe((item) => {
      console.log(item);
      this.colorsVoteResults(item);
    }));
  }

  colorsVoteResults(colors) {
    let mostVotedColor = {colorName: '', colorVote: -1};
    for(let i = 0; i < colors.length; i++) {
      if(colors[i].colorVote > mostVotedColor.colorVote) {
        mostVotedColor = colors[i];
      }
    }
    for(let i = 0; i < colors.length; i++) {
      this.initResultsToUser(colors[i], false);
    }
    this.initResultsToUser(mostVotedColor, true);
  }

  initResultsToUser(color, isMax) {
    switch (color.colorName) {
      case 'red':
        this.votesCount.red = color.colorVote;
        this.progress_width.red = this.colorVotePrecent(color.colorVote, isMax);
        break;
      case 'blue':
        this.votesCount.blue = color.colorVote;
        this.progress_width.blue = this.colorVotePrecent(color.colorVote, isMax);
        break;
      case 'green':
        this.votesCount.green = color.colorVote;
        this.progress_width.green = this.colorVotePrecent(color.colorVote, isMax);
        break;
      case 'black':
        this.votesCount.black = color.colorVote;
        this.progress_width.black = this.colorVotePrecent(color.colorVote, isMax);
        break;
      case 'yellow':
        this.votesCount.yellow = color.colorVote;
        this.progress_width.yellow = this.colorVotePrecent(color.colorVote, isMax);
        break;
      case 'gray':
        this.votesCount.gray = color.colorVote;
        this.progress_width.gray = this.colorVotePrecent(color.colorVote, isMax);
        break;
      case 'ping':
        this.votesCount.ping = color.colorVote;
        this.progress_width.ping = this.colorVotePrecent(color.colorVote, isMax);
        break;
      case 'orange':
        this.votesCount.orange = color.colorVote;
        this.progress_width.orange = this.colorVotePrecent(color.colorVote, isMax);
        break;
    }
  }

  colorVotePrecent(value, isMax) {
    let result;
    if(isMax) {return 100;}
    if(value >= 60) {result = 100;}
    else if(value >= 30 && value < 60) {result = 50;}
    else if(value >= 20 && value < 30) {result = 30;}
    else if(value >= 0 && value < 20) {result = 20;}
    return result;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
