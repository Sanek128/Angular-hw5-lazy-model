import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [UserComponent, AllUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild ([
      {path: 'users', component: AllUserComponent}
    ])
  ],
  providers: [UserService]
})
export class UserModule { }
