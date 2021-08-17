import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module')
            .then( m => m.HomePageModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => import('./pages/sign-up/sign-up.module')
            .then( m => m.SignUpPageModule)
    },
    {
        path: 'learn-more',
        loadChildren: () => import('./pages/learn-more/learn-more.module')
            .then( m => m.LearnMorePageModule)
    },
    {
        path: 'thank-you',
        loadChildren: () => import('./pages/thank-you/thank-you.module')
            .then( m => m.ThankYouPageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
