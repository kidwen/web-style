import { Injectable } from '@angular/core';
import { interval, mergeMap, Observable, take } from 'rxjs';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
    public getUser(): Observable<User> {
        return interval(1000).pipe(
            take(3),
            mergeMap(async index => {
                const user: User = {
                    id: (++index).toString(),
                    name: 'kidwen',
                }
                return user;
            }),
        );
    }
}
