import { Routes, RouterModule } from '@angular/router';

import { CalcPageComponent } from './calc/calc.component';
import { BoxPageComponent } from './box/box.component';
import { CreditsPageComponent} from './credits/credits.component';
import { SettingsPageComponent} from './settings/settings.component';
import { TrainersPageComponent} from './trainers/trainers.component';



const routes: Routes = [
    { path: '', component: CalcPageComponent },
    { path: 'box', component: BoxPageComponent },
    { path: 'credits', component: CreditsPageComponent },
    { path: 'settings', component: SettingsPageComponent },
    { path: 'trainers', component: TrainersPageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);