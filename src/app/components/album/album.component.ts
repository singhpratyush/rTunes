import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../../../../Album';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: `album.component.html`,
  providers: [SpotifyService]
})
export class AlbumComponent implements OnInit{
	id: string;
	album: Album;
	rateArray: Album[];
	constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute) {}

	ngOnInit() {
		this._route.params.map(params => params['id']).subscribe((id) => {
			this._spotifyService.getAlbumInfo(id).subscribe(album => {
				this.album = album.album;
			if(this.album.playcount >= 10000000)
				{
					this.album.rating = 5;
					this.rateArray = new Array(5);
				}
				else if(this.album.playcount >= 5000000)
				{
					this.album.rating = 4;
					this.rateArray = new Array(4);
				}
				else if(this.album.playcount >= 1000000)
				{
					this.album.rating = 3;
					this.rateArray = new Array(3);
				}
				else if(this.album.playcount >= 500000)
				{
					this.album.rating = 2;
					this.rateArray = new Array(2);
				}
				else if(this.album.playcount < 500000)
				{
					this.album.rating = 1;
					this.rateArray = new Array(1);
				}
			})			
		})
	}
}
