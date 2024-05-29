import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';
import { error } from 'console';
import { Route, Router, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    FormsModule,
    RouterModule,
    HomeLayoutComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  formMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authServive: AuthService,
    private router: Router,
  ){  }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    })
  }

  login(){
    console.log(this.loginForm.value);
    
    this.authServive.login(this.loginForm.value).subscribe((res) => {
      console.log(res);

      if(res.userId != null){
        const user = {
          userId: res.userId,
          role: res.userRole
        }
        StorageService.saveToken(res.jwt);
        StorageService.saveUser(user);
        if(StorageService.isAdminLoggedIn())
          this.router.navigateByUrl("/admin/dashboard");
        else
        this.router.navigateByUrl("/customer/dashboard")

      } else {
        
        console.error("bad crediantials");
        
      }
    })
  }
}
