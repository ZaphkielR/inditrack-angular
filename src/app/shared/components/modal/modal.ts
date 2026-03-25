import { Component, Input } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
    selector: 'app-modal',
    imports: [NzModalModule],
    templateUrl: './modal.html',
})
export class Modal {
    // Entradas
    @Input() title: string = '';
    @Input() content: string = '';

    isVisible = false;

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        this.isVisible = false;
    }
}
