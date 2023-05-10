import { Component, OnInit } from '@angular/core';
import { DbService } from './Services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dbService: DbService){}
  
  artists: any = [];
  ngOnInit(): void {
    this.dbService.getArtists().subscribe((v)=>{
      this.artists = v;
    })
    console.log(this.artists);
  }
  

  title = 'SpotifyClone';
}
