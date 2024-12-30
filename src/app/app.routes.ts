import { Routes } from '@angular/router';
import { MenWearComponent } from './men-wear/men-wear.component';
import { WomenWearComponent } from './women-wear/women-wear.component';
import { TopCollectionsComponent } from './top-collections/top-collections.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [

    {
        path:'men-wear',
        component:MenWearComponent
    },
    {
        path:'women-wear',
        component:WomenWearComponent
    },
    {
        path:'top-collections',
        component:TopCollectionsComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    }
];
