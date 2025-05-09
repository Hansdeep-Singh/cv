import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";
import { Optional } from "@angular/core";

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> PageZero, * <=> PageOne,* <=> PageTwo,* <=> PageThree,* <=> PageFour,* <=> PageFive', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('900ms ease-out', style({ left: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('900ms ease-out', style({ left: '0%' }))
                ]),
            ]),
        ])
    ]);