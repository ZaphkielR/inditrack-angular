import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateCL',
})
export class DateCLPipe implements PipeTransform {
    transform(value: string): string {
        const date = new Date(value);
        return new Intl.DateTimeFormat('es-CL', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        }).format(date);
    }
}
