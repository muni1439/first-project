import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,MatCardModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {

}
