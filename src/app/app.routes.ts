import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewpageComponent } from './newpage/newpage.component';
import { CachepageComponent } from './cachepage/cachepage.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
    {
        path: '',
        component: PortfolioComponent
    },
    {
        path: 'cache',
        component: CachepageComponent
    },
    {
        path: 'new',
        component: NewpageComponent
    }
];
