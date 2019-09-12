import { of, from, merge, Observable } from 'rxjs';
import { map, concatMap,mergeMap } from 'rxjs/operators';

const go = (obs: Observable<any>) => {
 return of(obs.subscribe(message => console.log(message)));
}
const obs1 = new Observable(observer => {
  observer.next('NEXT1');
  observer.error(err => console.log(err));
  
});
const obs2 = new Observable(observer => {
  observer.next('NEXT2');
  observer.error(err => console.log(err)); 
  
});
const obs3 = new Observable(observer => {
  observer.next('NEXT3');
  observer.error(err => console.log(err));
  
});
const obs4 = new Observable(observer => {
  observer.next('NEXT4');
  observer.error(err => console.log(err)); 
  
});
const source1 = from([obs1, obs2]);
source1.pipe(concatMap(postRequest => of(postRequest)))
.subscribe(msg => msg.subscribe(res => console.log(res)));

const source2 = from([obs3, obs4]); 
source2.pipe(mergeMap(postRequest=>go(postRequest))) 
.subscribe(); 
const source3 = of(['message1', 'message2']);
source3.pipe(concatMap(res => (res))).subscribe(msg => console.log(msg));
