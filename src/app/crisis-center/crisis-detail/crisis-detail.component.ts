import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {CrisisService, Crisis} from "../crisis.service";
import {DialogService} from "../../dialog.service";
import {CanComponentDeactivate} from "../../auth/can-deactivate-guard.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit, CanComponentDeactivate {

  public editName: string;
  public crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {

  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { crisis: Crisis }) => {
        this.editName = data.crisis.name;
        this.crisis = data.crisis;
      });

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

  canDeactivate(): Observable<boolean>|Promise<boolean>|boolean {
    if(!this.crisis || this.crisis.name === this.editName) {
      return true;
    }

    return this.dialogService.confirm('Discard changes?');
  }

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
