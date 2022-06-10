import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { TestimonyService } from '../testimony.service';
import { TestimonyModel } from './data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(public TestimonyService:TestimonyService) { }
  testimony : TestimonyModel[] | any;

  ngOnInit(): void {
    this.TestimonyService.getData().subscribe((data)=>{
      this.testimony = JSON.parse(JSON.stringify(data))
      // console.log(this.testimony[0].testimony)
    })
  }

}
