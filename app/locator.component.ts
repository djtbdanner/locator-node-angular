import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { enableProdMode } from '@angular/core';
// enableProdMode();
@Component({
    selector: 'jdf-calculator',
    templateUrl: 'app/locator.component.html'
})

export class Locator {
    latitudeField = new FormControl();
    longitudeField = new FormControl();
    theLat = "";
    theLong = "";
    theCount = 0;

    ngOnInit() {
        this.displayLatLong(this);
        this.withoutFatArrow();

    }

    displayLatLong(theThis) {
        navigator.geolocation.getCurrentPosition(function (position) {
            theThis.theLat = position.coords.latitude;
            theThis.theLong = position.coords.longitude;
            theThis.theCount = theThis.theCount + 1;
        });
    }   

    withoutFatArrow() {
        this.timer = setInterval(()=>  this.displayLatLong(this), 500);
    }
}
