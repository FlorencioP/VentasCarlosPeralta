import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoginmailService } from 'src/app/services/loginmail.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  email: any;
  password: any;


  constructor( private loginmail: LoginmailService, private router: Router) { }

  ngOnInit() {
  }

  googleLogin() {
    this.loginmail.googleLogin();
  }
    
  emailLogin() {
    let data = this.loginmail.emailPasswordLogin(this.email,this.password);
    console.log('Response:\n', data);


    
    this.router.navigate(['/folder/Tiendas'])
    



  }

  registro() {
    this.router.navigate(['/registro'])
  }


}
