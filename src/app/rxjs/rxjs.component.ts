import { Component, OnInit } from '@angular/core';
import { Observable, of, from, concat, fromEvent, Subscriber, Observer, interval, Subject } from 'rxjs';
import { map, filter, mergeMap, catchError, delay, share, publish, refCount } from 'rxjs/operators';
import { COURSES } from '../common/course.service';
import { Course } from '../common/course.interface';
import { nextContext } from '@angular/core/src/render3';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    //#region Creating Observable From Scratch
  //     // const allCourseObservable$ = new Observable(subscriber => {
  //     const allCourseObservable$ = Observable.create(subscriber => {

  //       COURSES.forEach(c => {
  //         // if (c.name === 'RxJs') {throw new Error('Terrible Terrible'); }
  //         subscriber.next(c);
  //       });
  //       setTimeout(() => {
  //         subscriber.complete();
  //       }, 2000);

  //       // CleanUp
  //       return () => console.log('Teardown Complete');
  //     });

  //     allCourseObservable$.subscribe(
  //       (val: Course) => console.log('return value: ', val),
  //       err => console.log(`Der opstod en fejl: ${err.message}`),
  //       () => console.log('All done')
  //       );
 //#endregion Creating Observable From Scratch

    //#region Using of, from , fromEvent to create observables from existing data

// const myArr = ['a', 'b', 'c', 'd', 'e'];

// const source$ = of('hello', 10, COURSES[3].name);
// // const source$ = of(myArr);
// // const source$ = from(myArr);
// // const source$ = from(COURSES);
// // const source$ = concat (of('hello', 10, true, COURSES[3].name), from(COURSES));

// source$.subscribe(v => console.log(v));

//#endregion

    //#region FromEvent and operator
    // const button = document.getElementById('myBtn');

    // const source$ = fromEvent(button, 'click');

    // source$.pipe(map((o: MouseEvent) => {
    //   return {
    //     x: o.clientX,
    //     y: o.clientY
    //   };
    // })).subscribe(val => console.log(val));

//#endregion

    //#region Observers
    // const source$ = from ([1, 2, 3, 4, 5]);

    // // Longhand
    // source$.subscribe ({
    //   next: val => console.log(val),
    //   error: e => console.log('Error:', e),
    //   complete: () => console.log('completed')
    // });

    // // Short Hand
    // source$.subscribe(
    //   val => console.log(val),
    //   e => console.log('Error: ', e),
    //   () => console.log ('completed')
    // );

    // NOTE: Hver subscriber trigger observerens execution. Man kunne tro at Observable´en
    // producerede data og at subscriberne så bare greb hvad der kom ud. Men det er ikke tilfældet

    // const source$ = new Observable((observer: Observer<string>) => {
    //   const now = new Date().toLocaleTimeString();
    //   observer.next(now);
    //   observer.complete();
    // });

    // source$.subscribe(
    //   val => console.log(`Observer 1: ${val}`)
    // );

    // setTimeout(() => {
    //   source$.subscribe(val => console.log(`Observer 2: ${val}`));
    // }, 1000);

    // setTimeout(() => {
    //   source$.subscribe(val => console.log(`Observer 3: ${val}`));
    // }, 2000);


//#endregion

    //#region Subscriptions
// const button = document.getElementById('myBtn');

// const source$ = interval(1000);

// const subscription = source$.subscribe(val => console.log(val));

// fromEvent(button, 'click').subscribe(
//   val => subscription.unsubscribe()
// );

//#endregion

    //#region Operators
        // const url = 'http://localhost:3000/courses';
        // ajax(url).pipe(
        //     mergeMap(data => data.response),
        //     filter ((c: Course) => +c.id >= 3),
        //     catchError (err => of('Så for Søren') )
        // )
        // .subscribe(val => console.log('DATA', val));
    //#endregion

    //#region Subjects
        // Both Observable and Observer => it proxies the value before returning a new observable
        // Multicast instead of Unicast - multiple observers can listen to the same value
        // includes an array of observers

        // Cold Observable
        const cold$ = new Observable(subscriber => {
            interval(1000).subscribe(
                val => subscriber.next(val)
            );
        });

        const subject$ = cold$.pipe(publish(), refCount()); // new Subject();

        // cold$.subscribe(subject$);

        subject$.subscribe(val => console.log(`Observer 1: ${val}`));
        setTimeout(() => {
            subject$.subscribe(val => console.log(`Observer 2: ${val}`));
        }, 2000);

        // subject$.connect();
    //#endregion
  }
}
