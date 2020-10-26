import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfoApiComponent} from './informer/info-api/info-api.component';
import {InfoAppComponent} from './informer/info-app/info-app.component';
import {TitleComponent} from './Informer/title/title.component'

const routes: Routes = [
  {path: 'api', component: InfoApiComponent},
  {path: 'app', component: InfoAppComponent},
  {path: '**', component: TitleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
