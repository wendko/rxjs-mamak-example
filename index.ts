import { of, timer } from 'rxjs'; 
import { map, tap } from 'rxjs/operators';

/** 
 * Creating an observable
 */

const numberObs$ = of(1, 2, 3, 4, 5);

const letterObs$ = of('a', 'b', 'c', 'd', 'e');

/**
 * Tap - the "console.log" of rxjs 😂
 */
numberObs$.pipe(
  tap(console.log)
).subscribe();

/**
 * Limiting stream intake
 */


/**
 * Switch map
 */


/**
 * Click events can be observables too!
 */

// const source = of('World').pipe(
//   map(x => `Hello ${x}!`)
// );

// source.subscribe(x => console.log(x));