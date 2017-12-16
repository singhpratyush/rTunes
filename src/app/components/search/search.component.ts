import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../../Artist';
import { PagerService } from '../../services/pager.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
  providers: [SpotifyService]
})
export class SearchComponent {
	searchQuery: string;
	searchCategory: string;
	searchRes: Artist[];
	pager: any = {};
	pagedItems: any[];
	constructor(private _spotifyService:SpotifyService, private _pagerService: PagerService) {}
	searchArtist() {
		this._spotifyService.searchArtist(this.searchQuery,200).subscribe(res => {
			this.searchRes = res.results.artistmatches.artist;
			this.setPage(1);
		})
	}
	searchTrack() {
		this._spotifyService.searchTrack(this.searchQuery,200).subscribe(res => {
			this.searchRes = res.results.trackmatches.track;
			this.setPage(1);
		})
	}
	searchAlbum() {
		this._spotifyService.searchAlbum(this.searchQuery,200).subscribe(res => {
			this.searchRes = res.results.albummatches.album;
			this.setPage(1);
		})
	}
	setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this._pagerService.getPager(this.searchRes.length, page);
        this.pagedItems = this.searchRes.slice(this.pager.startIndex, this.pager.endIndex + 1);
	}
	searchBasedOnCategory(category: string) {
		if(category != '')
		{
			this.searchCategory = category;
		}
		if(this.searchCategory == "Album")
		{
			this.searchAlbum();
		}
		else if(this.searchCategory == "Track")
		{
			this.searchTrack();
		}
		else if(this.searchCategory == "Artist")
		{
			this.searchArtist();
		}
	}
}
