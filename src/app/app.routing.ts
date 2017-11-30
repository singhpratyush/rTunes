import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AboutComponent }   from './components/about/about.component';
import { SearchComponent }   from './components/search/search.component';
import { ArtistComponent }   from './components/artist/artist.component';
import { AlbumComponent }   from './components/album/album.component';
import { CountryComponent }   from './components/country/country.component';

 
const routes: Routes = [
	{ path: '',  component: SearchComponent },
	{ path: 'about',  component: AboutComponent },
	{ path: 'artist/:name',  component: ArtistComponent },
	{ path: 'album/:id',  component: AlbumComponent },
	{ path: 'country', component: CountryComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
