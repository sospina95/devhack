import { Component, OnInit } from '@angular/core';
import { RickandmortyapiService } from 'src/app/share/shareservice/rickandmortyapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pictures;
  constructor(private res : RickandmortyapiService) { }
  ngOnInit() {
    let count;    
    count = this.getRandomArbitrary(1,183, 3);
    this.res.getAleatory(count).subscribe(rs=>{
      this.pictures = rs;      
    });
  }
  /* 
    * Funcion que genera una array con los ids aleatorios
    * min intervalo minimo
    * max intervalo maximo
    * Tamaño el array
    * autor sospina
  */
  getRandomArbitrary(min, max, count) {
    let array = [];
    for (let i = 0; i < count; i++) {
      array.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return array;
  }

}
