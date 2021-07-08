import { Directive } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[appCustomvalidation]'
})
export class CustomvalidationDirective {}

//My custom validation function
export function armenianlastname(control:AbstractControl): {[key:string]:any} | null{
  const lastnamecontrolschangedvalue:string = control.value
  //See here the various options to get a substring: https://stackoverflow.com/questions/5873810/how-can-i-get-last-characters-of-a-string
  //Getting the last three chracters of the string. We used trim here, but this only strips off white space from the beggining and the end of the text. Had we wanted to strip off all white space, regex would be required.
  const lastthreelettersofthelastname = lastnamecontrolschangedvalue.trim().slice(-3).toLocaleLowerCase()
  if (lastthreelettersofthelastname === "" || lastthreelettersofthelastname =="yan" || lastthreelettersofthelastname=="ian") {
    return null
  } else {
    return {"lastnameerror":true}
  }
}

//My cross-field validation function
export function experiencecrossfield(group:AbstractControl): {[key:string]:any} | null{
  const companycontrol = group.get("company")
  const positioncontrol = group.get("position")
if (companycontrol && positioncontrol) {
  if (companycontrol.value.length>0 && positioncontrol.value.length===0) {
    return {"positionval":true}
  } else if(positioncontrol.value.length>0 && companycontrol.value.length===0){
    return {"companyval":true}
  } else if(companycontrol.hasError('required')===false && positioncontrol.hasError('required')===false){
    companycontrol.markAsUntouched()
    positioncontrol.markAsUntouched()
    return null
}
} else { 
  return null
}}