import { of, timer, interval, fromEvent, combineLatest } from 'rxjs'; 
import { tap, take, map, delay, switchMap, finalize } from 'rxjs/operators';


function example() {
  /** 
   * Create an observable of numbers 1-5
   */


  /** 
   * Create an observable of emojis
   * '🍉','🍇','🍎','🍊','🍒'
   */


  /** 
   * Let's have a look!
   */


  /**
   * Create a observable that emits a value every second
   */


  /**
   * Let's just take 5 values
   */
  
  
  /**
   * Click events can be observables too!
   * Log "Hey!" when it is clicked
   */


  /**
   * Using emitted values to do something
   * For each second, take the next item from the emoji array
   * '🌑','🌒','🌓','🌔','🌝','🌖','🌓','🌑'
   */


  /**
   * Merging observables
   * One observable is preparing 🍔 and 🍗🍗
   * The other one is preparing fries 🍟
   * Prepare the order!
   */


  /**
   * Use finalize to output "Finally!"
   */

}

console.clear();
example();