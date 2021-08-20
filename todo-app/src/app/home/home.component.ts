import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private crud : CrudService) { }
  todos :Array<string>=[];
  ngOnInit(): void {
    this.todos = this.crud.data;
  }
  onSubmit(ref:NgForm){
    this.crud.addData(ref.form.value.add)
  }
  delete(i : number)
  {
   console.log(i) 
   this.crud.data = this.crud.data.filter((item,index)=>{
      return index != i
    })
    this.todos = this.crud.data;
  }

}
