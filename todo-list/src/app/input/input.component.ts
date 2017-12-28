import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <p>
    The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit {
  title: string = 'Pipoco do Trovão';
  constructor() { }

  ngOnInit() {
  }

}
