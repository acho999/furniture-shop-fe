import { trigger, transition, style, animate, group, query, state, animateChild } from '@angular/animations';

export const login_reg_animations = 
    
    trigger('login_reg',[
        transition(':enter', [
            style({
                transform:'translateY(-100%)'
            }),
            animate('.5s')
        ]),
        /*transition(':leave',[
            animate('.5s',style({
                transform:'translateY(100%)'
            }))
            
        ])*/
    
    ]);

    export const message = trigger('messageAfterReg',[
        transition(':enter', [
            style({
                transform:'translateX(-100%)'
            }),
            animate('.5s')
        ]),
        transition(':leave',[
            animate('.5s',style({
                transform:'translateX(100%)'
            }))
            
        ])
    ])

  
    export const changeImages = trigger('changeImage',
        
        [
          
      transition(':enter', [
        style({opacity: 0}),
        animate(1500)
       ]),

     
      transition(':leave',
        animate(1500, style({opacity: 0})))

      
       ])




