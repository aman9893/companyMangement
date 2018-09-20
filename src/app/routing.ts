import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { AuthGuard } from './auth.guard';
import { NotAuthGuardService } from './no-auth-guard-service';
import { BooklistComponent } from './Library/booklist/booklist.component';

export const AppRoutes: Routes = [

    
    { path: 'login', component: LoginComponent },
    { path: 'singup', component: RegisterComponent },
 
    { path: '', component: DashbordComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
    { path: 'dashbord', component: DashbordComponent ,canActivate: [AuthGuard]},
    { path: 'admin', component: AdminDashbordComponent , canActivate: [AuthGuard]},
    { path: 'booklist', component: BooklistComponent , canActivate: [AuthGuard]},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
