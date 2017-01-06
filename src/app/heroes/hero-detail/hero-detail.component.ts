import {Component, OnInit, HostBinding} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {HeroService, Hero} from "../hero.service";
import {slideInDownAnimation} from "../../animations";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [ slideInDownAnimation ]
})
export class HeroDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getHero(+params['id']))
      .subscribe((hero:Hero) => this.hero = hero);
  }

  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['/heroes', {id: heroId}])
  }
}
