import { Component } from '@angular/core';
import { contact } from '../data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faAddressCard,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  styleUrls: ['./contact.component.css'],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contact = contact;
  faPaperPlane = faAddressCard;
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
}
