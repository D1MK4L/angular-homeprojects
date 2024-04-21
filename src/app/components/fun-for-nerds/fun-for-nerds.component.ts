import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { WordService } from 'src/app/shared/services/word.service';
import { OddLengthWordsComponentComponent } from '../odd-length-words-component/odd-length-words-component.component';
import { EvenLengthWordsComponentComponent } from '../even-length-words-component/even-length-words-component.component';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { ChuckNorrisJoke, DadJoke } from 'src/app/shared/interfaces/jokes';



@Component({
  selector: 'app-fun-for-nerds',
  standalone: true,
  imports: [OddLengthWordsComponentComponent,EvenLengthWordsComponentComponent],
  templateUrl: './fun-for-nerds.component.html',
  styleUrl: './fun-for-nerds.component.css'
})
export class FunForNerdsComponent implements OnInit{
  jokesService = inject(JokesService);
  dadJoke: string = '';
  chuckNorrisJoke: string = '';
  @Output() jokes = new EventEmitter<string>();
  userInput: string = '';
  dadJokes: string[] =[];
  chuckNorrisJokes: string[] =[];


  ngOnInit(): void {
    this.jokesService.getDadJoke().subscribe((data)=>{
      console.log(data)
    });
    this.jokesService.getChuckNorrisJoke().subscribe((data)=>{
      console.log(data)
    });
  }

  constructor (private wordServise: WordService) {} 

  refreshDadJoke() {
    this.jokesService.getDadJoke().subscribe((data: DadJoke) => {
      console.log(data.joke)
      this.dadJoke = data.joke;
      this.dadJokes.unshift(this.dadJoke);
    });
  }

  refreshChuckNorrisJoke() {
    this.jokesService.getChuckNorrisJoke().subscribe((data: ChuckNorrisJoke)=> {
      console.log(data.value)
      this.chuckNorrisJoke = data.value;
      this.chuckNorrisJokes.unshift(this.chuckNorrisJoke);
    });
  }

  onUserInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userInput = value;
    return this.userInput;   
  }

  onSubmit() {
    if(this.userInput.length === 0){
      console.log("No input");
    }else {
      if (this.userInput.length % 2 === 0) {
        // Even length word
        this.refreshDadJoke();
        this.wordServise.addEvenLengthWord(this.dadJoke);
        this.jokes.emit(this.dadJoke);             
      } else {
        // Odd length word
        this.refreshChuckNorrisJoke();
        this.wordServise.addOddLengthWord(this.chuckNorrisJoke);       
        this.jokes.emit(this.chuckNorrisJoke);       
      }
    }
  }
}


