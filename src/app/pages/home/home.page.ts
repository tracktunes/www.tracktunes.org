import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { IonContent } from '@ionic/angular';

import validateEmail from '../../functions/validate_email';
import { AlertService } from '../../services/alert/alert.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    @ViewChild(IonContent, {read: IonContent, static: false}) private content?: IonContent;
    public showLearnMoreText: boolean = false;
    public showLearnMoreButton: boolean = true;
    public email: string = '';

    constructor(
        private router: Router,
        private alertService: AlertService) { }

    public onClickSignUp(): void {
        if (this.email) {
            const email = this.email.trim().toLowerCase();
            if (validateEmail(email, true)) {
                // console.log('valid email');
                Auth.signUp({
                    username: email,
                    password: '@ev$ZLaYw\b;,f{7\]:ucJM4m+6}@:bzYv2L5?&v:6v`P:`',
                    attributes: { email }
                });
            this.router.navigate([ 'thank-you' ]);
            } else {
                this.alertService.okAlert({
                    header: 'Please try another email',
                    message: 'We could not process the email address"' +
                        this.email.trim() + '". Please try a different one.'
                });
            }
        }
    }

    public onClickLearnMore(): void {
        this.showLearnMoreText = true;
        this.showLearnMoreButton = false;
        setTimeout(() => {
            if (this.content) {
                this.content.scrollToBottom(500);
            }
        }, 500);
    }
}
