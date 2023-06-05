import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee-list/employee';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.css']
})
export class CardModelComponent implements OnInit {

  @Input() employee:Employee | undefined;


  constructor() { }

  ngOnInit(): void {

  }

}
