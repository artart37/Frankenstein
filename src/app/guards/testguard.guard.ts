import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestguardGuard implements CanActivate {
constructor(private loginserv:LoginService, private route: ActivatedRoute, private router:Router) { };
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {//The logic goes here
      // console.log("next: " + next.url);
      // console.log("state: " + state.url); 
    if (this.loginserv.userisloggedin()) {
      return true;
    }
    else {
      this.router.navigate(["/", {outlets: {modal: "signin"}}],{relativeTo: this.route})
      return false;
    }
  }
 }