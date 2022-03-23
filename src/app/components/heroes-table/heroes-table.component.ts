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
      name: 'Kathryn Murphy',
      phone: '(252) 555-012',
      email: 'tanya.hill@exmaple.com',
      date: "March 6, 2018",
      country: "Saudi Arabia",
      company: "L 'Oreal"
    },
    {
      name: 'Wade Warren',
      phone: '(671) 555-0110',
      email: 'dolores.chambers@exmaple.com',
      date: "September 24, 2017",
      country: "Serbia",
      company: "eBay"
    },
    {
      name: 'Devon Lane',
      phone: '(209) 555-0104',
      email: 'sara.cruz@exmaple.com',
      date: "Februry 9, 2015",
      country: "Russian Federation",
      company: "Girllette"
    },
    {
      name: 'Kathryn Murphy',
      phone: '(252) 555-012',
      email: 'tanya.hill@exmaple.com',
      date: "March 6, 2018",
      country: "Saudi Arabia",
      company: "L 'Oreal"
    },
    {
      name: 'Wade Warren',
      phone: '(671) 555-0110',
      email: 'dolores.chambers@exmaple.com',
      date: "September 24, 2017",
      country: "Serbia",
      company: "eBay"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
