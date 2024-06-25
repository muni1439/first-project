import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'portfolio-website', pathMatch: 'full' },
    {path:'portfolio-website' , loadChildren: () => import('./portfolio-website/portfolio-website.module').then(m => m.PortfolioWebsiteModule)}
];
