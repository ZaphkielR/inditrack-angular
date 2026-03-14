import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { BasicToast } from './shared/components/basic-toast/basic-toast';
import { LucideAngularModule, FileIcon } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BasicToast, LucideAngularModule],
  templateUrl: './app.component.html',
})
export class App implements OnInit {
  protected readonly title = signal('inditrack-angular');
  readonly FileIcon = FileIcon;

  ngOnInit(): void {
    initFlowbite();
  }
}
