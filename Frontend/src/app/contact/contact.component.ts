import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  subjects = ["Let's work together","Get help from Front-end experts","Get help from Front-end experts","Hosting related","Others"]
  selected = "----"
  
  update(e:any){
    this.selected = e.target.value

 
  }
  ngOnInit(): void {
  }
 

}
