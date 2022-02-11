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
    public showLearnMoreText: boolean = false;
    public showLearnMoreButton: boolean = true;
    public email: string = null;

    constructor(private router: Router) {}

    public onClickSignUp(): void {
        const email = this.email.trim().toLowerCase();
        if (validateEmail(email, true)) {
            // console.log('valid email');
            Auth.signUp({
                username: email,
                password: '@ev$ZLaYw\b;,f{7\]:ucJM4m+6}@:bzYv2L5?&v:6v`P:`',
                attributes: { email }
            }).catch(err => {
                // ignore errors
                // console.log('caught error: ', err);
            });
        } else {
            // console.log('invalid email: ', email);
        }
        if (email) {
            this.router.navigate([ 'thank-you' ]);
        }
    }

    public onClickLearnMore(): void {
        this.showLearnMoreText = true;
        this.showLearnMoreButton = false;
        setTimeout(() => {
            this.content.scrollToBottom(500);
        }, 500);
    }
}
