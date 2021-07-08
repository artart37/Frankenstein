import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';
@Directive({
  selector: "p[jmurik]",
})
export class NinthDirective {

constructor(private renderer:Renderer2, private el:ElementRef) { }
@HostListener("mouseup") getsel() {
// Check if the selected text is not blank or doesn't have the below characters or is not a blank
if (window.getSelection().toString().replace(/\s+/g,"")!=="") {
//Defining the position of the selected string
const rangei = window.getSelection().getRangeAt(0)
//Defining the span node element
const ourspan = this.renderer.createElement("span")
//Checking if the created span element has the class underlinet
if (ourspan.classList.contains('underlinet')!==true && rangei.commonAncestorContainer.nodeName !== "APP-BINDINGS") {
//Defining and creating a text node. Cutting the selected content, converting to text
const textnode = this.renderer.createText(rangei.extractContents().textContent)
// Appending the text node element as a child to the the span element
this.renderer.appendChild(ourspan, textnode)
this.renderer.addClass(ourspan,"underlinet")
rangei.insertNode(ourspan) 
   } 
  }
 }
}
//TRIALS AND ERRORS
//window.getSelection().getRangeAt(0).surroundContents()
// this.renderer.setProperty(this.el.nativeElement,"innerHTML",this.el.nativeElement.innerHTML.replace(seltext,ourspan.outerHTML))
// console.log("Anchor Node: ");
// console.log(window.getSelection().anchorNode);
// console.log("Focus Node: ");
// console.log(window.getSelection().focusNode);
// console.log("Focus Node's Parent Node: ");
// console.log(window.getSelection().focusNode.parentNode);
// console.log("Focus Node's Parent Nodes' Parent Element: ");
// console.log(window.getSelection().focusNode.parentNode.parentElement);
// console.log(window.getSelection().focusNode.parentNode.isSameNode(this.el.nativeElement));
// console.log(window.getSelection().focusNode.parentElement.classList.length);
// console.log(window.getSelection().focusNode.parentElement);