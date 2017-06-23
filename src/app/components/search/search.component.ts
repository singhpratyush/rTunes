import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
  providers: [SpotifyService]
})
export class SearchComponent {
	searchQuery: string;
	constructor(private _spotifyService:SpotifyService) {}
	searchMusic() {
		this._spotifyService.searchMusic(this.searchQuery).subscribe(res => {
			console.log(res.artists.items);
		})
	}
}
