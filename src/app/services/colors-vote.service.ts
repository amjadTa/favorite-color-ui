import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ColorsVoteService {
  private rootURL = '/api';

  constructor(private http: HttpClient) {}

  colorsVoted(colorName: string) {
    return this.http.post(this.rootURL + '/color-vote', colorName);
  }

  listColorsVoteResult() {
    return this.http.get(this.rootURL + '/all-votes');
  }
}
