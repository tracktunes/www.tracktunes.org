import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public bShowLearnMore: boolean = false;
    
    constructor() {}

    public onClickLearnMore(): void {
        this.bShowLearnMore = true;
    }
}
