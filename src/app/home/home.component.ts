import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  position: string = 'full stack developer';


  image:string='../../assets/techinacal.png'

  profile = {
    name: 'tarun pareta',
    emai: 'tarun@gmail.com',
    address: 'kota',
  };
  hire() {
    console.log('profile', this.profile);
  }
}
