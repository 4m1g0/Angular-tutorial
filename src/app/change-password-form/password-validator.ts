import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class PasswordValidator {
    static oldPassCorrect(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === '1234')
                    resolve(null);
                else
                    resolve({oldPassCorrect:true});
            }, 2000);
        });
    }

    static passwordMatch(control: AbstractControl): ValidationErrors | null {
        let password = control.get('newPassword');
        let match = control.get('confirmPassword');

        if (password.value === match.value)
            return null
        else
            return {passwordMatch: true};
    }
}