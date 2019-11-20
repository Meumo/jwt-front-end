import {Component,OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  mode: number=0;
  user;
  errorMessage: string;
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
  }
  onRegister(dataForm) {
    this.authService.register(dataForm)
      .subscribe(data => {
        this.user=data;
        this.mode=1;        
      },err => {
        this.errorMessage=err.error.message;
        this.mode=0;
      });
  }
}
