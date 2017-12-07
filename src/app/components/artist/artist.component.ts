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
	rateArray: any[];
	constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute) {}
	ngOnInit() {
		this._route.params.map(params => params['name']).subscribe((name) => {
			this._spotifyService.getArtistInfo(name).subscribe(artist => {
				this.artist = artist.artist;
				this.rateArray = new Array(this.findArtistRating());
			})
			this._spotifyService.getAlbums(name).subscribe(albums => {
				this.albums = albums.topalbums.album;
			})
		})
	}
	findArtistRating = function()
	{
		if(this.artist.stats.playcount >= 10000000)
		{
			return 5;
		}
		else if(this.artist.stats.playcount >= 5000000)
		{
			return 4;
		}
		else if(this.artist.stats.playcount >= 1000000)
		{
			return 3;
		}
		else if(this.artist.stats.playcount >= 500000)
		{
			return 2;
		}
		else if(this.artist.stats.playcount < 500000)
		{
			return 1;
		}
	}
}
