import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColorsVoteService } from '../services/colors-vote.service';

@Component({
  selector: 'app-vote-result',
  templateUrl: './vote-result.component.html',
  styleUrls: ['./vote-result.component.scss']
})
export class VoteResultComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  showColors: boolean = false;
  colors: any;
  constructor(private colorsVoteService: ColorsVoteService) { }

  ngOnInit(): void {
    this.subscription.add(this.colorsVoteService.listColorsVoteResult().subscribe(item => {
      if(item) {
        this.colors = item;
        this.showColors = true;
      }
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
