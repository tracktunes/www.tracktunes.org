import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { IonContent } from '@ionic/angular';

import validateEmail from '../../functions/validate_email';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    @ViewChild(IonContent, {read: IonContent, static: false}) content;
    public bShowLearnMore: boolean = false;
    public email: string = null;

    constructor(private router: Router) { }

    public onClickSignUp(): void {
        if (validateEmail(this.email, true)) {
            console.log('valid email');
            Auth.signUp({
                username: this.email,
                password: 'dummy123X',
                attributes: { email: this.email }
            }).then(res => { console.log(res); });
        }
        // thank all regardless of validity
        this.router.navigate([ 'thank-you' ]);
    }

    public onClickLearnMore(): void {
        this.bShowLearnMore = true;
        setTimeout(() => {
            this.content.scrollToBottom(500)
        }, 500);
    }
}
