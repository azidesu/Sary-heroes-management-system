import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Models/Hero';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.css']
})

export class HeroesTableComponent implements OnInit {

  heroes: Hero[] = [
    {
      name: 'Abdulaziz',
      phone: '11223323',
      email: 'a@gamil.com',
      date: new Date(),
      country: "Saudi Arabia",
      company: "Sary"
    },
    {
      name: 'kaa',
      phone: '43423442',
      email: 'ai@gami.om',
      date: new Date(),
      country: "US",
      company: "hhh"
    },
    {
      name: 'test',
      phone: '2331435',
      email: 'wl@mil.com',
      date: new Date(),
      country: "Saudi Arabia",
      company: "fff"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
