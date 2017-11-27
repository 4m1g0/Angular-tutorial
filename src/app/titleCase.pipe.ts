import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
    transform(value: string) {
        let token = value.split(' ');
        if (token.length == 0)
            return "";

        token[0] = this.capitalize(token[0]);

        for (let i=1; i<token.length; i++) {
            if (token[i].length > 3)
                token[i] = this.capitalize(token[i]);
            else
                token[i] = token[i].toLowerCase();
        }

        return token.join(" ");
        
    }
    
    private capitalize(value: string) {
        if (!value ||  value.length == 0)
            return "";
        
        let result:string;

        value = value.toLowerCase();
        value = value.replace(/\b\w/g, l => l.toUpperCase())
        console.log(value);
        return value;
    }
}