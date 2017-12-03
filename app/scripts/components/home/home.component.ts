import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';

import {ContentService} from '../../services/content.service';
import {ContentItem} from '../../interfaces/content.interface';

@Component({
	selector: 'main-content',
	templateUrl: './home.component.html',
    providers: [ContentService]
})
export class HomeComponent implements OnInit {
	// id of the section
	private _secitonId: number;

    content: Array<ContentItem>;

    constructor(
    	private _contentService: ContentService,
		private _router: Router) {
        this.content = [];
    }

    ngOnInit() {
    }
}