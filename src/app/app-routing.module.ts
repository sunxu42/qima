import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CreateComponent } from './qimaQA/create/create.component';
import { QimaComponent } from './qimaQA/qima.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: QimaComponent,
  },
  {
    path: 'qima',
    component: QimaComponent,
  },
  {
    path: 'create-status',
    component: CreateComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
