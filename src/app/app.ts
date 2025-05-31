import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header";
import { HeroComponent } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Schedule } from "./components/schedule/schedule";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { PlayerComponent } from "./components/player/player";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, About, Schedule, Contact, Footer, PlayerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'lanceros-landing';
}
