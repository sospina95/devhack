import { Component, OnInit } from '@angular/core';
import { RickandmortyapiService } from 'src/app/share/shareservice/rickandmortyapi.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public pictures;
  constructor(private res : RickandmortyapiService) { }

  ngOnInit() {
    this.res.allCharacters().subscribe(rs=>{
      this.pictures = rs.results;
    });
  }

}
