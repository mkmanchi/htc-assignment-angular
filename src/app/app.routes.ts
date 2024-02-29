import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewpageComponent } from './newpage/newpage.component';
import { CachepageComponent } from './cachepage/cachepage.component';

export const routes: Routes = [
    {
        path: '',
        component: CachepageComponent
    },
    {
        path: 'new',
        component: NewpageComponent
    }
];
