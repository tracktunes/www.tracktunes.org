import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
// import { verifier } from 'email-verify';
// import { dns } from 'dns';

const EMAIL_REG_EXP: RegExp =
      /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
const EMAIL_MAX_LEN: number = 255;
const EMAIL_MIN_LEN: number = 8;

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
        const len: number = this.email.length;
        let bValid: boolean = false;
        if (!(len > EMAIL_MAX_LEN || len < EMAIL_MIN_LEN ||
              this.email[0] === '.' || this.email[len-1] === '.')) {
            bValid = EMAIL_REG_EXP.test(this.email);
        }
        /*
        if (bValid) {
            verifier.verify(this.email, (err, info) => {
                if (info.success) {
                    bValid = true;
                }
            });
        }
        console.log('email: ' + this.email, bValid);
        */
        /*
        public signUp(email: string, password: string): Promise<ISignUpResult> {
        return Auth.signUp({
            username: email,
            password,
            attributes: { email }
        });
        */
        this.router.navigate([ 'thank-you' ]);
    }

    public onClickLearnMore(): void {
        this.bShowLearnMore = true;
    }
}
