import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public lista: Lista;
  public listas: Lista[];
  isEmpty:boolean;
  constructor() { }

  ngOnInit(): void {
    this.lista = {
      restaurante:'',
      ciudad:''
    };
    this.listas=[];
  }
  
  agregar(){
    if(this.lista.ciudad && this.lista.restaurante){
    console.log('tamaño: ' + this.listas.length);
    console.log(this.listas);
    this.listas.push({...this.lista});
    this.listas.reverse();
    this.lista.restaurante='';
    this.lista.ciudad='';
    }
    else{
    alert('Debe ingresar los datos correspondientes');
    }
  }

  validarDuplicado(){
    let cont:number = 0;
    if(this.listas.length>0){
    this.listas.forEach(element => {
      console.log('Entro a for')
      if((element.ciudad.match(this.lista.ciudad)) && (element.restaurante.match(this.lista.restaurante)))
        {
          console.log('Registro ya existe');
          cont++;
          this.lista.restaurante='';
          this.lista.ciudad='';
          alert('Registro ya existe');
        }
      })
    if(cont===0){
      this.agregar();
      }
    }
    else{
      this.agregar();
    }
  }
}
