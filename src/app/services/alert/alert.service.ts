import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface AlertButton {
    text: string;
    role: string;
    handler?: () => void;
}

interface AlertOptions {
    message: string;
    buttons?: AlertButton[];
    header?: string;
    subHeader?: string;
    cssClass?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor(private alertController: AlertController) {}

    public async okAlert(
        options: AlertOptions,
        handler: () => void = () => {},
    ): Promise<any> {
        options.buttons = [{
            text: 'OK',
            role: 'cancel',
            handler
        }];
        options.cssClass = 'app-alert';
        const alert: HTMLIonAlertElement =
            await this.alertController.create(options);
        await alert.present();
        return alert.onDidDismiss();
    }
}
