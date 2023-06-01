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

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'projects/FullStack', component:FSComponent},
  {path: 'projects/DataManage', component:DMComponent},
  {path: 'projects/DataAnalysis', component:DAComponent},
  {path: 'projects/DataVis', component:DVComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
