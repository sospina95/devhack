import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickandmortyapiService } from 'src/app/share/shareservice/rickandmortyapi.service';

@Component({
  selector: 'app-detail-characters',
  templateUrl: './detail-characters.component.html',
  styleUrls: ['./detail-characters.component.css']
})
export class DetailCharactersComponent implements OnInit {
  param1;
  character;
  constructor(private r:ActivatedRoute, private res : RickandmortyapiService) {
    r.url.subscribe((u) => {
      this.res.getByCharacters(r.snapshot.params.id).subscribe(rs =>{
        this.character = rs;
      });
    });
  }
  ngOnInit() {}

}
