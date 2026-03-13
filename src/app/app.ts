import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class App implements OnInit {
  protected readonly title = signal('inditrack-angular');

  ngOnInit(): void {
    initFlowbite();
  }
}
