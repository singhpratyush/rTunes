import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AboutComponent }   from './components/about/about.component';
import { SearchComponent }   from './components/search/search.component';
 
const routes: Routes = [  
  { path: 'about',  component: AboutComponent },
  { path: '',  component: SearchComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
