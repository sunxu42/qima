import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CreateComponent } from './qimaQA/create/create.component';
import { QimaComponent } from './qimaQA/qima.component';
import { UpdateComponent } from './qimaQA/update/update.component';

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
  },{
    path: 'update-status',
    component: UpdateComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
