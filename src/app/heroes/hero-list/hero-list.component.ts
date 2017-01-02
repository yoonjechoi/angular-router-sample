import { Component, OnInit } from '@angular/core';
import {HeroService, Hero} from "../hero.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Observable<Hero[]>

  private selectedId: number;

  constructor(
    private service: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getHeroes()
      });

  }

  isSelected(hero: Hero): boolean {
    return hero.id === this.selectedId;
  }

  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }
}
