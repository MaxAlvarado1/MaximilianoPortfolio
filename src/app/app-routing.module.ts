import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FSComponent } from './pDetails/fs/fs.component';
import { DMComponent } from './pDetails/dm/dm.component';
import { DAComponent } from './pDetails/da/da.component';
import { DVComponent } from './pDetails/dv/dv.component';
import { MlComponent } from './pDetails/ml/ml.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'FullStack', component:FSComponent},
  {path: 'DataManage', component:DMComponent},
  {path: 'DataAnalysis', component:DAComponent},
  {path: 'DataVis', component:DVComponent},
  {path: 'MachineLearning', component:MlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
