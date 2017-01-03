import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {CrisisService, Crisis} from "../crisis.service";

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  private editName: string;
  private crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    // this.route.data
    //   .subscribe((data: { crisis: Crisis }) => {
    //     this.editName = data.crisis.name;
    //     this.crisis = data.crisis;
    //   });

    // this.route.params
    //   .switchMap((params: Params) => this.service.getCrisis(+params['id']))
    //   .subscribe((crisis: Crisis) => {
    //     this.editName = crisis.name;
    //     this.crisis = crisis;
    //   });
  }
//   this.route.params
// .switchMap((params: Params) => this.service.getHero(+params['id']))
// .subscribe((hero:Hero) => this.hero = hero);

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', {id: crisisId, fod: 'foo'}], { relativeTo: this.route });
  }
}
