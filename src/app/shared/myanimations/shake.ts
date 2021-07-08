import {animate, keyframes, state, style, transition, trigger} from "@angular/animations"

export const shake = trigger("shake",[
    //Our States
    state("normal", style("*")),
    state("shakestate", style({ // Defining a state to transition to
     transform: "translate3d(0, 0, 0)",
    })),
    transition('normal <=> shakestate, :enter', animate('0.75s', keyframes([ // Defining the transition steps through keyframes to the the above state
      style({transform: "translate3d(-10px, 0, 0)", offset: 0.10}),
      style({transform: "translate3d(10px, 0, 0)", offset: 0.20}),
      style({transform: "translate3d(0, 0, 0)", offset: 0.30}),
      style({transform: "translate3d(-10px, 0, 0)", offset: 0.40}),
      style({transform: "translate3d(10px, 0, 0)", offset: 0.50}),
      style({transform: "translate3d(0, 0, 0)", offset: 0.60}),
      style({transform: "translate3d(-10px, 0, 0)", offset: 0.70}),
      style({transform: "translate3d(10px, 0, 0)", offset: 0.80}),
      style({transform: "translate3d(0, 0, 0)", offset: 0.90}),
      ])
    )),
    transition(':leave', animate('0.2s', keyframes([ // Defining the transition steps through keyframes to the the above state
      style({opacity: "0.66", transform: "scale(0.66)", offset: 0.33}),
      style({opacity: "0.33", transform: "scale(0.33)", offset: 0.66}),
      style({opacity: "0", transform: "scale(0)", offset: 1}),
      ])
    )),
])