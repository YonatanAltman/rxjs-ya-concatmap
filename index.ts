import { of, from, merge, Observable } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';

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
const source = from([obs1, obs2]);
source.pipe(concatMap(postRequest => of(postRequest)))
.subscribe(msg => msg.subscribe(res => console.log(res)));

 

const source2 = of(['message1', 'message2']);
source2.pipe(concatMap(res => (res))).subscribe(msg => console.log(msg));
