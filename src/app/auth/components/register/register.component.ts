import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  state: string = '';
  error: any;
  constructor(public afAuth: AngularFireAuth,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if (f.valid){
      console.log(f.value);
      this.afAuth.auth.createUserWithEmailAndPassword(f.value.email, f.value.password)
       .then(
        (success) => {
        console.log(success);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }
  
}
