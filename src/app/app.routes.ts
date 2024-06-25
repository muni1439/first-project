import { Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const routes: Routes = [
    { path: '', redirectTo: 'portfolio-website/home', pathMatch: 'full' },
    {path:'portfolio-website' , loadChildren: () => import('./portfolio-website/portfolio-website.module').then(m => m.PortfolioWebsiteModule)}
];

providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
