import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }
  
  data:Array<string> = []

  addData(todo:string){

    this.data.push(todo);

  }

}
