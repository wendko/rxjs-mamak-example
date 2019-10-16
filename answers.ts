import { of, timer, interval, fromEvent, combineLatest } from 'rxjs'; 
import { tap, take, map, delay, switchMap, finalize } from 'rxjs/operators';


function example() {
  /** 
   * Create an observable of numbers 1-5
   */
  const numberObs$ = of(1, 2, 3, 4, 5);

  /** 
   * Create an observable of emojis
   * '🍉','🍇','🍎','🍊','🍒'
   */
  const emojiObs$ = of('🍉','🍇','🍎','🍊','🍒');

  /** 
   * Let's have a look!
   */
  // emojiObs$.pipe(tap(console.log)).subscribe();

  /**
   * Create a observable that emits a value every second
   */
  const secondObs$ = interval(1000);
  //secondObs$.pipe(tap(console.log)).subscribe();


  /**
   * Let's just take 5 values
   */
  // secondObs$.pipe(take(5), tap(console.log)).subscribe();
  
  /**
   * Click events can be observables too!
   * Log "Hey!" when it is clicked
   */
  const bearClicked$ = fromEvent(document.getElementById('bear'), 'click');
  bearClicked$.pipe(
    tap(_ => console.log('Hey!'))
  ).subscribe();


  /**
   * Using emitted values to do something
   * For each second, take the next item from the emoji array
   * '🌑','🌒','🌓','🌔','🌝','🌖','🌓','🌑'
   */
  const moonPhases = ['🌑','🌒','🌓','🌔','🌝','🌖','🌓','🌑']
  // interval(1000).pipe(
  //   take(moonPhases.length),
  //   map(val => moonPhases[val]),
  //   tap(console.log)
  // ).subscribe();


  /**
   * Merging observables
   * One observable is preparing 🍔 and 🍗🍗
   * The other one is preparing fries 🍟
   * Prepare the order!
   */
  const mainMeal$ = interval(1000).pipe(
    map(val => val%2 ? '🍔' : '🍗🍗'),
  );
  const fries$ = of('🍟');

  // mainMeal$.pipe(tap(console.log)).subscribe();
  // fries$.pipe(tap(console.log)).subscribe();

  const orders$ = combineLatest([mainMeal$, fries$]);
  //orders$.pipe(take(10), tap(console.log)).subscribe();

  /**
   * Use finalize to output "Finally!"
   */
  orders$.pipe(take(10), tap(console.log),
    finalize(() => console.log('Yay!')))
  .subscribe();

}

console.clear();
example();