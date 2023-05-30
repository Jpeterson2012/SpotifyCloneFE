import { Component, OnInit } from '@angular/core';
import { DbService } from './Services/db.service';
import { album } from './models/album.models';
import { environment } from './environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dbService: DbService){}
  
  albums: any = [];
  albums2: any = [];
  ngOnInit(): void {
    this.dbService.getAlbums().subscribe((v)=>{
      this.albums = v;
      // console.log(this.albums.albums[0].name)
      this.albums2 = this.albums.albums[0];
      console.log(this.albums2)
      
      
    })
    // fetch(this.data).then((response: any)=>response.json()).then((json)=>console.log(json));



  }
  
  data= environment.apiURL + 'albums';
  
  
  
  obj: any = [];
  

  title = 'SpotifyClone';
}
