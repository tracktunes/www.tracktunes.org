import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public bShowLearnMore: boolean = false;
    
    constructor(private router: Router) { }

    public onClickSignUp(): void {
        this.router.navigate([ 'thank-you' ]);
    }

    public onClickLearnMore(): void {
        this.bShowLearnMore = true;
    }
}
