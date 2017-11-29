import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UsernameValidator {
    static cannotContainSpaces(control : AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return {cannotContainSpaces: true}; // this is Any complex obj explaining the error

        return null;
    }

    static isUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            // this should be an asyncronous call to the server
            if (control.value === '4m1g0')
                resolve({isUnique: true});
            else
                resolve(null);
        });
    }

    static banned(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'craig') {
                    resolve({banned:true});
                }
                else
                    resolve(null);
            }, 2000);
        });
    }
}