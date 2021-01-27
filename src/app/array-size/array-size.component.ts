import { Component, Input, OnInit } from '@angular/core';
import { todoItem } from '../todo-item';

@Component({
  selector: 'app-array-size',
  templateUrl: './array-size.component.html',
  styleUrls: ['./array-size.component.scss']
})
export class ArraySizeComponent implements OnInit {

  @Input()
  
  public array: Array<any> =[];

  constructor() { }

  ngOnInit(): void {
  }

}
