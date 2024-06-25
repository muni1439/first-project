import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { SkillComponent } from '../skill/skill.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'skill',component:SkillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioWebsiteRoutingModule { }
