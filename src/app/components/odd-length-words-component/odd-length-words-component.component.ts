import { Component, Input } from '@angular/core';
import { FunForNerdsComponent } from '../fun-for-nerds/fun-for-nerds.component';
import { ChuckNorrisJoke } from 'src/app/shared/interfaces/jokes';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-odd-length-words-component',
  standalone: true,
  imports: [
    FunForNerdsComponent,
    MatCardModule,
    NgFor,
    CommonModule,
  ],
  templateUrl: './odd-length-words-component.component.html',
  styleUrl: './odd-length-words-component.component.css'
})
export class OddLengthWordsComponentComponent {
  @Input() jokes: string[] = [];

 constructor() {}
  
  // OnSubmitedClicked(chuckNorrisJoke: string){
  //   this.joke = chuckNorrisJoke;
  //   console.log(chuckNorrisJoke);
  // }
}
