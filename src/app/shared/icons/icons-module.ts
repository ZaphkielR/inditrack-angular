import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
  Speaker,
  TriangleAlert,
  User,
  Wrench,
  ChevronDown,
} from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({
      Speaker,
      TriangleAlert,
      User,
      Wrench,
      ChevronDown,
    }),
  ],
  exports: [LucideAngularModule],
})
export class LucideIconsModule {}
