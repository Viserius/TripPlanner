import {Component, OnInit} from '@angular/core';

import {VenueService} from '../../api/venue.service';
import {Venue} from '../../api/venue/venue';

@Component({
    selector: 'app-map-list',
    templateUrl: './map-list.component.html',
    styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {

    isMenuHidden: boolean = true;

    private venues: Venue[];

    constructor(private venueService: VenueService) {
    }

    ngOnInit() {
        this.venues = this.venueService.getVenues();
    }

    openMenu() {
        this.isMenuHidden = false;
    }

    closeMenu() {
        this.isMenuHidden = true;
    }

    setActive(venue: Venue) {
        this.venues.forEach((venue: Venue) => {venue.setActive(false)});
        venue.setActive(true);
        this.closeMenu();
    }

}
