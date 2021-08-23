import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { validateEmail } from '../../functions/email';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public bShowLearnMore: boolean = false;
    public email: string = null;

    constructor(private router: Router) { }

    public onClickSignUp(): void {
        if (validateEmail(this.email)) {
            Auth.signUp({
                username: email,
                password: 'harofe46X;',
                attributes: { email }
            }).then(res => { console.warn(res); });
        }
        // thank all regardless of validity
        this.router.navigate([ 'thank-you' ]);
    }

    public onClickLearnMore(): void {
        this.bShowLearnMore = true;
    }
}
