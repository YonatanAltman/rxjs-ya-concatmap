import { of,from, merge, Observable } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';

const obs1 = new Observable(observer => {
  observer.next('NEXT3');
  observer.error(err => console.log(err));
  observer.complete();
});
const obs2 = new Observable(observer => {
  observer.next('NEXT2');
  observer.error(err => console.log(err));
  observer.complete();
});
const source = from([obs1, obs2]);
source.pipe(concatMap(res => of(res))).subscribe(msg => console.log(msg));



const source2 = of(['message1', 'message2']);
source2.pipe(concatMap(res => (res))).subscribe(msg => console.log(msg));
