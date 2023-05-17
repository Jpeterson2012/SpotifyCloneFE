import { Component, OnInit } from '@angular/core';
import { DbService } from './Services/db.service';
import { album } from './models/album.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dbService: DbService){}
  
  albums!: Array<album>;
  ngOnInit(): void {
    this.dbService.getAlbums().subscribe((v)=>{
      this.albums = v;
    })
    console.log(this.albums);
  }
  

  title = 'SpotifyClone';
}
