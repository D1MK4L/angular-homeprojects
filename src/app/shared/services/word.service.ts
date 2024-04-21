import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  evenLengthWords: string[] = [];
  oddLengthWords: string[] = [];

  addEvenLengthWord(word: string) {
    this.evenLengthWords.push(word);
  }

  addOddLengthWord(word: string) {
    this.oddLengthWords.push(word);
  }
}