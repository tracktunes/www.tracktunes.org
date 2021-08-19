import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public bClickedSignUp: boolean = false;
    
    constructor() {}

    public onClickSignUp(): void {
        this.bClickedSignUp = true;
    }
}
