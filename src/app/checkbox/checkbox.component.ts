import {Component, EventEmitter, Input, OnInit} from '@angular/core';


@Component({ // <== Decorator (Typescript) - Add some info to the class bellow. Start with @, just before a class.
  // This decorator (@Component) said the class is a Web Component.
  selector: 'app-checkbox', // The markup's name. <app-checkbox></app-checkbox> in HTML.
  templateUrl: './checkbox.component.html', // Where to find the HTML file for the component.
  styleUrls: ['./checkbox.component.scss'] // Same for CSS.
})
export class CheckboxComponent implements OnInit {
  // Attribute shared by all instances of your class.
  // This line is execute ONLY AT ONE TIME => your program startup. It will NOT be execute at each new component.
  private static counter = 0;

  public id: string;

  @Input()
  public checked = false;

  public checkedChange = new EventEmitter;

  // Decorate our label attribute. Add info for Angular to allow label attribute to be used inside HTML
  // The @Input can be write ONLY before a class attribute or class getter.
  @Input() // <app-checkbox label="some text"></app-checkbox>
  public label: string|null = null;

  constructor() {
    this.id = 'app-checkbox-' + CheckboxComponent.counter;
    CheckboxComponent.incrementCounter();
  }

  // Same as static attribute, this method is shared by all instance of your class.
  private static incrementCounter(): void {
    CheckboxComponent.counter++;
  }

  ngOnInit(): void {
  }
}
