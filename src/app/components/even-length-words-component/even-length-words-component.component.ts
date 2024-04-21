import { Component, Input, NgModule} from '@angular/core';
import { FunForNerdsComponent } from '../fun-for-nerds/fun-for-nerds.component';
import { DadJoke } from 'src/app/shared/interfaces/jokes';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-even-length-words-component',
  standalone: true,
  imports: [
    FunForNerdsComponent,
    MatCardModule,
    NgFor,
    CommonModule,
  ],
  templateUrl: './even-length-words-component.component.html',
  styleUrl: './even-length-words-component.component.css'
})
export class EvenLengthWordsComponentComponent {
 @Input() jokes: string[] = [];

 constructor() {}
  
  // OnSubmitedClicked(dadJoke: string){
  //   this.jokes[] = dadJoke;    
  //   console.log(dadJoke);
  // }
}
