import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../../models';

@Injectable({ providedIn: 'root' })
export class AngularResolverService implements Resolve<User> {
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        console.log("🚀 ~ AngularResolverService ~ resolve ~ route:", route, state);
        return of({ id: 'id' });
    }

}
