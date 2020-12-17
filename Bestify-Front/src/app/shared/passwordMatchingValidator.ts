import {AbstractControl, SelectMultipleControlValueAccessor} from '@angular/forms';
export function differentPassValidator(control:AbstractControl):{[key:string]:any}|null{
   let setpass=control.get('setpass');
    let confirm=control.get('confirmpass');
    return confirm && setpass && confirm.value != setpass.value?{'match':true}:null;
}
