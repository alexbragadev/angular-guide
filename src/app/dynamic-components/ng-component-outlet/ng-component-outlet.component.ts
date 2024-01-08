import { Component, OnInit, inject } from '@angular/core';
import {NgComponentOutlet, AsyncPipe} from '@angular/common';
import { AdvertisingService } from 'src/app/core/advertising.service';

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.css']
})
export class NgComponentOutletComponent {

  private adList = inject(AdvertisingService).getAds();

  private currentAdIndex = 0;

  get currentAd() {
    return this.adList[this.currentAdIndex];
  }

  displayNextAd() {
    this.currentAdIndex++;
    // Reset the current ad index back to `0` when we reach the end of an array.
    if (this.currentAdIndex === this.adList.length) {
      this.currentAdIndex = 0;
    }
  }

}
