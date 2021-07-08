import { StepperSelectionEvent, StepState } from '@angular/cdk/stepper';
import {ChangeDetectorRef, Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, FormGroupDirective, NgForm} from "@angular/forms"
import { ErrorStateMatcher } from '@angular/material/core';
import { armenianlastname, experiencecrossfield} from '../shared/customvalidation.directive';
import { materrorhintanime } from '../shared/myanimations/materrorhint';

class CustomErrorStateMatcher implements ErrorStateMatcher {

isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const experiencearray = form.control.get("fgrouparray").get([1]) as FormArray
    const isSubmitted = !!(form && form.submitted)
    console.log(control, control.parent);
    return !!((control.touched || control.dirty || isSubmitted) && experiencearray.invalid);
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css'],
  animations: [materrorhintanime]
})
export class MyformsComponent {
  //A property for my ErrorStateMatcher
  errorMatcher = new CustomErrorStateMatcher();
  //A custom property tracking the completion status of the experience mat-step. We set false as default.
  experiencestep:boolean = false;
  //A custom property tracking the completion status of the final (cv and availibility) mat-step. We set false as default.
  finalstep:boolean = false;
  ///A porperty tracking the removeableness of my mat-chp in my stepper's 3rd step's browse
  removable:boolean=true
  //A custom property for my selected CV filelist object
  filelist:FileList;
  //A custom property for my selected CV file
  selectedfile:File = null;
   ////FormControl////
   email = new FormControl('');
   name = new FormControl('');
   /////FormGroup////
   usergroup = new FormGroup ({
     fullname: new FormControl(""),
     role: new FormControl(""),
   })
   /////Nested FormGroup////
   nestedgroup = new FormGroup ({
     firstname: new FormControl (""),
     lastname: new FormControl (""),
       contactdetails: new FormGroup ({
         address: new FormControl (""),
         phone: new FormControl (""),
         email: new FormControl (""),
       })
   })
 //A random object property
 randomprop:object={};
 //An empty FormGroup property
 randomformgroup:FormGroup;
 //An empty FormControl property
 randomformcontrol:FormControl;
 //Another empty FormGroup property
 anotherrandomformgroup:FormGroup;
 //Another FormGroup for a real project -- FormGroup
 arealformgroup:FormGroup;
 //A property for the Validated Form
 formvalproperty:object={};
 //Dynamic FormGroup property --FormArray
 dynamicform:FormGroup;
//  //Creating a public control property for the checkbox control
//  publiccurrent = new FormControl(false)
////////////////////////////////////////////////////////////////////
//A FormGroup property for my step by step application form
stepapplication:FormGroup;

   constructor(private fb:FormBuilder, private cd:ChangeDetectorRef) { }
 
   ngOnInit(): void {
    this.email.valueChanges.subscribe(x=>console.log(x));
    this.makevalidatedform();
    this.makeformgroup();
    this.makedynamicformgroup();
    this.stepappi();
    console.log(this.experiencearray, this.experiencearray.controls);
    console.log(this.dynamicform.get("dythirdgroupsectionarray"));
    console.log(this.stfirstname);
   }
 
 ////Methods////
 //Update name  --- FormControl
 updatename(){
   this.name.setValue("John");
 }
 ///Submit form --- FormGroup
 onSubmit() {
 console.log(this.usergroup.value);
 }
 //Submit Nested Form -- FormGroup
 onSubmitNest(){
   this.randomprop = this.nestedgroup.value
 }
 ///Update the Form controls through setValue -- FormGroup
 setFormControls() {
   this.nestedgroup.setValue({
     firstname: "John",
     lastname: "Smith",
       contactdetails: {
         address: "Texas",
         phone: "00013216544132",
         email: "somemail@mail.com",
       }
   })
 }
 
 ///Update the Form controls through patchValue -- FormGroup
 patchFormControls() {
   this.nestedgroup.patchValue({
     firstname:"Some first name",
   })
 }
 //Generate a FormGroup -- FormBuilder 
 //
 generateFormGroup() {
   this.randomformgroup = this.fb.group({
     role:[""],
     model:[""],
       nestedrandgroup: this.fb.group({
         age:[0],
         sex:[""],
         married:[false]
       })
   });
   console.log(this.randomformgroup.value);
 }
 //Generate a FormGroup -- FormBuilder
 //https://angular.io/api/forms/FormBuilder#control
 generateFormControl() {
 this.randomformcontrol = this.fb.control({
   //The following example returns a control with an object that contains both a value and a disabled status.
   //We couldve initialized the control with only an initial state value: this.randomformcontrol = this.fb.control("")
     value:"New Value",
     disabled:true
   })
   console.log(this.randomformcontrol.value);
 }
 
 //Make a validated Formgroup -- Validating form input
 makevalidatedform(){
   this.anotherrandomformgroup = this.fb.group({
     candifirstname:["",Validators.required],
     candilastname:["", Validators.required],
       candicontactdetails:this.fb.group({
         candiaddress:["", Validators.required],
         candiemail:["", Validators.required],
         candiphone:[""]
       })
   })
 }
 //Submitting the validated form -- Validating form input
 submitvalidatedform(){
   this.formvalproperty = this.anotherrandomformgroup.value
 }

//Make (initialize) a dynamic formgroup -- FormBuilder
makeformgroup(){
  this.arealformgroup = this.fb.group({
    firstgroupsection:this.fb.group({
      hirefirstname:[""],
      hirelastname:[""],
      hirephone:[""],
      hireemail:[""]
    }),
    secondgroupsection:this.fb.group({
      hirestatus:[false],
      hiremanagementstatus:[false]
    }),
    thirdgroupsection:this.fb.group({
      employer:[""],
      position:[""],
      startdate:[""],
      enddate:[""],
      //  //Publicly declared the prop as a FormControl
      //  current:this.publiccurrent
      current:[false]
    }),
  })
}
//A getter to store the information about current private control
get publiccurrent() {
  return this.arealformgroup.get("thirdgroupsection.current").value
}
//Make (initialize) a dynamic formgroup -- Dynamic Forms
makedynamicformgroup(){
  this.dynamicform = this.fb.group({
    dyfirstgroupsection:this.fb.group({
      dyhirefirstname:[""],
      dyhirelastname:[""],
      dyhirephone:[""],
      dyhireemail:[""]
    }),
    dysecondgroupsection:this.fb.group({
      dyhirestatus:[false],
      dyhiremanagementstatus:[false]
    }),
    dythirdgroupsectionarray:this.fb.array([
      this.fb.group({
        dyemployer:[""],
        dyposition:[""],
        dystartdate:[""],
        dyenddate:[""],
        dycurrent:[false]
      })])
    });
}
// A getter to store information about the FormGroup's dythirdgroupsectionarray array
get experiencearray(){
  return this.dynamicform.get("dythirdgroupsectionarray") as FormArray
}
// A method to add experience to my dynamic form
addexperience() {
  const experience = this.fb.group({
    dyemployer:[""],
    dyposition:[""],
    dystartdate:[""],
    dyenddate:[""],
    dycurrent:[false]
  })
this.experiencearray.push(experience);
console.log(this.experiencearray.controls);
}

removeexperiance(index:number){
  this.experiencearray.removeAt(index)
}
/////////////////////////////////////////////////////////////////
//A Method for initialising my step by step application formgroup
stepappi() {
  this.stepapplication = this.fb.group({
   fgrouparray:this.fb.array([
    this.fb.group({
      firstname:["",
      [
      Validators.required,
      Validators.minLength(2)
      ]
    ],
      lastname:["",[
        Validators.required,
        armenianlastname
      ]],
      email:["",
      [
      Validators.required,
      Validators.email
      ]
    ],
    }),
    this.fb.array([
      this.fb.group({
      company:[""],
      position:[""],
    },{validators:experiencecrossfield}),
  ]),
   this.fb.group({
      availablein:["",Validators.required],
      cv:[this.selectedfile,Validators.required]
    }),
   ]) 

  })
}

//A getter for my Personal FormGroup
get personal(){
  return this.stepapplication.get("fgrouparray").get([0]) as FormGroup
}

//A getter for my personal FormGroup's first name
get stfirstname(){
  return this.stepapplication.get("fgrouparray").get([0]).get("firstname")
}

//A getter for my personal FormGroup's last name
get stlastname(){
  return this.stepapplication.get("fgrouparray").get([0]).get("lastname")
}

//A getter for my personal FormGroup's email
get stemail(){
  return this.stepapplication.get("fgrouparray").get([0]).get("email")
}

//A getter for my stepapplication experience. The as FormArray specifically asserts the type of the experience Fromarray as FormArray.
get exparray() {
  return this.stepapplication.get("fgrouparray").get([1]) as FormArray
}
//A Method for tracking the added expereience by id
trackbyID(index:number){
  return index ? index : Number;
}
//A getter for my Final FormGroup
get final(){
  return this.stepapplication.get("fgrouparray").get([2]) as FormGroup
}

//A getter for my final FormGroup's availablein
get stavalable(){
  return this.stepapplication.get("fgrouparray").get([2]).get("availablein")
}

//A getter for my final FormGroup's cv
get stcv(){
  return this.stepapplication.get("fgrouparray").get([2]).get("cv")
}

//A getter tracking whether or not my cv control has DISPLAYED errors
get cvhasdisplayederrorsgetter(){
  //The !!() around the expressions explisictly tells this is going the be an error
 return !!(!this.stcv.errors?.filesizeError && !this.stcv.errors?.filetypeError && !(this.stcv.errors?.required && (this.stcv.dirty || this.finalstep)))
}

//Adding experience for my atepapplication FormGroup
addexp() {
  const newexpgroup = this.fb.group({
    company:["", Validators.required],
    position:["",Validators.required],
  },{validators:experiencecrossfield})
  
  const previouspanycontrol = this.exparray.controls[this.exparray.controls?.length-1]?.get("company")
  const previoustioncontrol = this.exparray.controls[this.exparray.controls?.length-1]?.get("position")
console.log(this.exparray);

if (this.exparray && this.exparray.controls.length>0 && previouspanycontrol.value.length>0 && previoustioncontrol.value.length>0) {
  ///PREVIOUS CONTROLS///
  previouspanycontrol.setValidators(Validators.required)
  // onlySelf: When true, only update this control. When false or not supplied, update all direct ancestors. Default is false.
  // emitEvent: When true or not supplied (the default), both the statusChanges and valueChanges observables emit events with the latest status and value when the control is updated. 
  previouspanycontrol.updateValueAndValidity({onlySelf: false, emitEvent: true})
  previoustioncontrol.setValidators(Validators.required)
  // onlySelf: When true, only update this control. When false or not supplied, update all direct ancestors. Default is false.
  // emitEvent: When true or not supplied (the default), both the statusChanges and valueChanges observables emit events with the latest status and value when the control is updated. 
  previoustioncontrol.updateValueAndValidity({onlySelf: false, emitEvent: true})
  this.exparray.push(newexpgroup)
//If the previous controls are empty
}else if(this.exparray && this.exparray.controls.length>0 && (previouspanycontrol.value.length==0 || previoustioncontrol.value.length==0)){
  previouspanycontrol.setValidators(Validators.required)
  //Marking the FormControl as touched to trigger the validation errors, because by  default it is triggered when the control is touched or the form is submitted
  previouspanycontrol.markAsTouched()
  previouspanycontrol.updateValueAndValidity()
  //Marking the FormControl as touched to trigger the validation errors, because by  default it is triggered when the control is touched or the form is submitted
  previoustioncontrol.setValidators(Validators.required)
  previoustioncontrol.markAsTouched()
  previoustioncontrol.updateValueAndValidity()
//If its the first position and company (adding after removing)
}else if(this.exparray===undefined || this.exparray===null || this.exparray.controls.length==0){
  newexpgroup.get('company').clearValidators()
  newexpgroup.get('position').clearValidators()
  this.exparray.push(newexpgroup)
}

}
///////////////////////////////////////////////////////
//Removing experience from my atepapplication FormGroup
reexp(index){
  this.exparray.removeAt(index)
}

//A method tracking the changed steps
selectionChange(e:StepperSelectionEvent){

//https://stackoverflow.com/questions/57445739/angular-7-material-stepper-reactive-form-reset-not-working
e.selectedIndex==1?e.selectedStep.interacted=false:null

if (e.previouslySelectedIndex==1) {
//Checking if we have navigated away from my experience step, and if so, assigning true to my experiencestep
this.experiencestep=true

this.exparray.controls.forEach(
  experienceformgroup=>{
    
    for (const controlname in experienceformgroup['controls']) {
      experienceformgroup.get(controlname).markAsTouched()
      experienceformgroup.get(controlname).updateValueAndValidity()
      // console.log(controlname);
      console.log(experienceformgroup.get(controlname), experienceformgroup['controls']);
     }
  }
)

}

//Checking if we have navigated away from my final step, and if so, assigning true to my finalstep
  e.previouslySelectedIndex===2?this.finalstep=true:null;
}
//Tracking the browsed and selected file information
trackfile(e){
  this.selectedfile = <File>e.target.files[0];
  //Accepted file formats:
  const allowedextensions:Array<string> = ["jpg", "xlsx", "tiff", "bmp", "gif", "rtf", "png", "docx", "tif", "pptx", "txt", "odg", "pdf", "ppt", "doc", "jpeg", "odp", "text", "odt", "xls", "ods"]
    //Storing the file extension in the filetype
    const filetype:string = this.selectedfile?.name.split(".").pop().toLowerCase()
    //A boolean representing whether or not the selected file extension matches the filetype
    let fileextmatch:boolean=false;
    //Checking if the file extension is one of the allowed extensions, if so, assigning the fileextmatch true, or assigning false if not
    //We use for insted of foreach, because for allows break
    for (let index = 0; index < allowedextensions.length; index++) {
    if (filetype === allowedextensions[index]) {
      fileextmatch=true
      break
    }}
    
  //A const storing the actual filesize
  const filesize:number =  this.selectedfile?.size;
 
  //Assigning errors to my control
  if (fileextmatch && filesize <=5120000) {
    //Checking if a file is selected and only then assigning the new value to the control through e.target.files.length>0 check. Otherwise, when I cancel the browse window, the selected file would disappear.
    e.target.files.length>0?this.filelist=e.target.files:null
  }else{
    //If the bad file extension or size is selected and it is in fact selected, we assign null to the filelist to tell angular not not to select it
    e.target.files.length>0?this.filelist=null:null;
    if (filesize>5120000) {
      //Nullifying the control value if there is a size error
      this.stcv.patchValue(null)
      //Setting the size error object to true
      this.stcv.setErrors({"filesizeError":true})
    } else {
      this.stcv.setErrors({"filesizeError":null})
    }
    if (fileextmatch===false){
      //Nullifying the control value if there is a type error
      this.stcv.patchValue(null)
      //Setting the type error object to true
      this.stcv.setErrors({"filetypeError":true})
      //Because setError wipes all previous errors, I only set the type error to true, if the size error is absent
    }else if(this.stcv.hasError("filesizeError")===false){
      this.stcv.setErrors({"filetypeError":null})
    }
  }
  this.cd.markForCheck()
}
//Nullifying the input value on click. should be used alongise click event binding.
// nullifyValue(e){
//   // e.target.value=null
//   // this.stcv.patchValue(null)
// }


 //My CV FIle Name getter;
 get filename () {
 return  this.selectedfile.name
 }
 //A custom boolean getter tracking whether the CV is selected or not
 get fileisselected(){
   return !!(this.filelist?.length>0)
 };
//A method for removing the selected CV file
removefile(){
  this.filelist=null;
  this.stcv.patchValue(null)
  this.stcv.updateValueAndValidity({onlySelf: false, emitEvent: true})
}
//Submitting my stepapplication form
submitapplication(){
  ///My option
  // let cvfileasformdata:FormData  = new FormData;
  //.............Same for the previous controls
  // cvfileasformdata.append("availablein", this.stavalable.value)
  // cvfileasformdata.append("cv", this.selectedfile, this.selectedfile.name)
  // cvfileasformdata.forEach(el=>console.log(el));
  //Other option
 let fd:FormData = new FormData()
 let parentKey:any;
 //Without the foreach loop we wouldn't be able to see the FormData in the console, since it is an iterable. We therefore foreach here to console log each and every form control
 this.convertJsontoFormData(this.stepapplication.value, parentKey, fd).forEach(el=>console.log(el))
}

///CPNVERT JSON TO FORMDATA FUNCTION///
///ORIGINAL SOURCE: https://stackoverflow.com/questions/53026879/how-to-convert-embed-nested-formgroup-to-formdata
//Slightly modified by me, mainly due to the fact that the file wasn't being erecognised through instanceof. I have therefore added and used the isFile function.
convertJsontoFormData(jsonObject: Object, parentKey, carryFormData: FormData): FormData {
  const formData = carryFormData || new FormData();
  let index = 0;

  for (let key in jsonObject) {   
      if (jsonObject.hasOwnProperty(key)) {
          if (jsonObject[key] !== null && jsonObject[key] !== undefined) {
              let propName: string = parentKey || key;
              if (parentKey && this.isObject(jsonObject)) {
                propName = parentKey + '[' + key + ']';
              }
              if (this.isArray(jsonObject)) {              
                propName = parentKey + '[' + index + ']';
              }
              if (this.isFile(jsonObject[key])) {
                  console.log(propName);
                  formData.append(propName, this.selectedfile, this.selectedfile.name);  
              } else if (this.isArray(jsonObject[key]) || this.isObject(jsonObject[key])) {               
                  this.convertJsontoFormData(jsonObject[key], propName, formData);
              } else if (typeof jsonObject[key] === 'boolean') {
                  formData.append(propName, + jsonObject[key] ? '1': '0');
              } else {
                  //Console logging the property name of the FormData for each control.
                  console.log(propName);
                  
                  formData.append(propName, jsonObject[key]);
              }
          }
      }
      index++;
  }
  return formData;
}

isArray(val) {
  const toString = ({}).toString; 
  return toString.call(val) === '[object Array]';
}

isObject(val) {
  return !this.isArray(val) && typeof val === 'object' && !!val;
}
///Checking whether the selected file patth equals the convertJsontoFormData functions jsonObject[key]. See Above. Console log to examine.
isFile(val) {
return this.stcv.value === val
}

}