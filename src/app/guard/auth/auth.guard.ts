import { ɵɵinject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/components/auth-service';

export const guardServiceGuard: CanActivateFn = (route, state) => {
  const authService = ɵɵinject(AuthService);
  const router = ɵɵinject(Router)
  return authService.isLoggedIn$.pipe(map((isLoggedIn)=>{
    console.log(isLoggedIn)
    debugger;
    if(isLoggedIn){
        return true
    }
    router.createUrlTree(['/login']);
    return false
}))
}