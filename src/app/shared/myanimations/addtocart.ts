import { animate, animation, keyframes, query, state, style, transition, trigger } from "@angular/animations"

export const addbutton = trigger("addbuttonanim",[
// // Defining a style to transition to after the state transition
// state("notadded", style("*")),
// // Defining a state to transition to after the state transition
// state("added", style({left:"50%"})),

// transition("notadded <=> added", animate("0.5s linear", keyframes([
//         style({visibility: "visible", left: 0,offset:0}),
//         style({left: "50%",offset:0.5}),
//         style({left: 0,offset:1}),
//   ])
// )),

// Defining a style to transition to after the state transition
state("notadded", style("*")),
// Defining a style to transition to after the state transition. With query, it applies to the parent to which t he animation is attached
state("added", style("*")),
//Defining the state transition for the animation to apply
transition("notadded <=> added", [//Opening an array for the query option which inquires childs of the element on which the animation trigger is applied
        //First we query the element with the class name addtext and animate the opacity. Optional true means that angular will not throw an error if the said element does not exist
        //We could have defined the destinations styles for the corresponding states for addtext el, within the above states - these styles would have probably applied only for the addtext element.
        //Havent tried that though.
        query(".addtext", animate('0.2s linear', style({opacity: 0})), { optional: true }),
        //Here we animate the element with the class name vcheckmark. We say that if the state is added, before making the style: left:65px, it goes through animation steps through the keyframe.
        //Our vcheckmark class stores the styles which are default, including the tick image. We have done this, because I didnt want to overload the browser with too many operations.    
        query(".vcheckmark", animate("0.5s linear", keyframes([
                style({visibility: "visible", left: 0, offset:0}),
                style({left: "50%",offset:0.5}),
                style({left: 0,offset:1}),
          ])
        ), { optional: true }),
    ],
  ),
])
//In-depth info about angular animations and queries can be found here: https://indepth.dev/posts/1285/in-depth-guide-into-animations-in-angular