/* eslint-disable no-underscore-dangle */
import { NewsService } from './../services/news.service';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localAr from '@angular/common/locales/ar-EG';
registerLocaleData(localAr);
@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.page.html',
  styleUrls: ['./mainscreen.page.scss'],
})
export class MainscreenPage implements OnInit {
  constructor(private _services: NewsService) { }

  topheadingDisplay: any = [];

  ngOnInit(): void {

    this._services.topHeading().subscribe(result => {
      this.topheadingDisplay = result.articles;
      console.log(result);
    });

  }
}
