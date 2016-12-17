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

    ngOnInit() {
        this.displayLatLong();
        var int2 = setInterval(function () {
            
             this.displayLatLong(); 
            
        }, 1000);

    }

    displayLatLong() {
        let x = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            x.latitudeField.setValue(position.coords.latitude);
            x.longitudeField.setValue(position.coords.longitude);
        });
    }
}