import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../../Artist';
import { Album } from '../../../../Album';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: `artist.component.html`,
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit{
	name: string;
	artist: Artist;
	albums: Album[];
	rateArray: Album[];
	constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute) {}
	ngOnInit() {
		this._route.params.map(params => params['name']).subscribe((name) => {
			this._spotifyService.getArtistInfo(name).subscribe(artist => {
				this.artist = artist.artist;
				if(this.artist.stats.playcount >= 10000000)
				{
					this.artist.rating = 5;
					this.rateArray = new Array(5);
				}
				else if(this.artist.stats.playcount >= 5000000)
				{
					this.artist.rating = 4;
					this.rateArray = new Array(4);
				}
				else if(this.artist.stats.playcount >= 1000000)
				{
					this.artist.rating = 3;
					this.rateArray = new Array(3);
				}
				else if(this.artist.stats.playcount >= 500000)
				{
					this.artist.rating = 2;
					this.rateArray = new Array(2);
				}
				else if(this.artist.stats.playcount < 500000)
				{
					this.artist.rating = 1;
					this.rateArray = new Array(1);
				}
			})
			this._spotifyService.getAlbums(name).subscribe(albums => {
				this.albums = albums.topalbums.album;
			})
		})
	}
}
