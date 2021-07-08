import {animate, query, style, transition, trigger} from "@angular/animations"
export const elheader = trigger("elheaderanime",[
    transition(':enter',[
        style({opacity:"0"}),
        animate("0.6s")
    ]),
    transition(':leave',[
        animate("0.6s", style({opacity:"0"}))
    ])
])
export const elng = trigger("elnganime",[
    transition(':enter',[
        style({opacity:"0"}),
        animate("0.5s", style({opacity:"1"}))
    ]),
    transition(':leave',[
        animate("0.5s", style({opacity:"0"}))
    ])
])

export const page = trigger("pageanime",[
    transition('* <=> *', [
      query(':enter,:leave',
      [
          style({ opacity: 0 })
      ], 
      { optional: true }
  ),
     query(':enter', 
      [
          style({ opacity: 0 }),
          animate('0.25s', style({ opacity: 1 }))
      ], 
      { optional: true }
  )

])

]);