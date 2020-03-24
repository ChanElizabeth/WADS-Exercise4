import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  state: string = '';
  error: any;

  constructor(public afAuth: AngularFireAuth,private router: Router) {
  this.afAuth.authState.subscribe(auth => { 
    if(auth) {
      this.router.navigateByUrl('/members');
    }
  });
}

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if(f.valid) {
      console.log(f.value);
      this.afAuth.auth.signInWithEmailAndPassword(f.value.email, f.value.password)
      .then(
        (success) => {
        console.log(success);
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }
  
}
