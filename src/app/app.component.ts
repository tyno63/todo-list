import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  public todoArray: Array<string> = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'foobar',
  ];

  /**
   * This method is used in app.component.html on a keyup event on the text input.
   * It take a KeyboardEvent as argument and return void (mean its return nothing).
   */
  public addItem($event: KeyboardEvent): void {
    // Check if keyboard key pressed is Enter.
    if ($event.code === 'Enter') {
      // Get the event source html element. In our case, its an input element.
      const $input: HTMLInputElement|null = $event.target as HTMLInputElement;

      if ($input !== null) {
        console.log($input.value);
      }

      console.log('Enter pressed');
    }
  }
}
