import { Component, ErrorHandler, Input } from '@angular/core';
import { MyMovieDataService } from './services/my-movie-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'MyMovieData';

  @Input() movieData:Response;
  errorMessage: ErrorHandler;
  imageHeight = 300;

  constructor(private _myMovieDataService:MyMovieDataService){

  }

  getMovieDetails(movieName: string): boolean{
    this._myMovieDataService.getMovieData(movieName).subscribe(movieData => {
      this.movieData = movieData;
      console.log('getMovieDetails: ' + this.movieData);
    },
    error => this.errorMessage = <any>error);
    return false;
    
  }
}
