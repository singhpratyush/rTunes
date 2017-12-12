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
	setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this._pagerService.getPager(this.searchRes.length, page);
        this.pagedItems = this.searchRes.slice(this.pager.startIndex, this.pager.endIndex + 1);
	}
}
