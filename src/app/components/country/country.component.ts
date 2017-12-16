import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../../Artist';
import { PagerService } from '../../services/pager.service';


@Component({
  moduleId: module.id,
  selector: 'country',
  templateUrl: `country.component.html`,
  providers: [SpotifyService]
})
export class CountryComponent {
	searchQuery: string;
	searchRes: Artist[];
	pager: any = {};
	pagedItems: any[];
	constructor(private _spotifyService:SpotifyService, private _pagerService: PagerService) {}
	searchCountry() {
		if(this.searchQuery != undefined && this.searchQuery != '')
		{
			this._spotifyService.searchCountry(this.searchQuery).subscribe(res => {
				this.searchRes = res.topartists.artist;
				this.setPage(1);
			})
		}
	}
	setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this._pagerService.getPager(this.searchRes.length, page);
        this.pagedItems = this.searchRes.slice(this.pager.startIndex, this.pager.endIndex + 1);
	}
}