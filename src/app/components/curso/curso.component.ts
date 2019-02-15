import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  curso:any[]=[]

  constructor(private _cursoService:CursoService) { }

  ngOnInit() {
    this.curso=this._cursoService.getHeroes();
  }

}
