import { Component, OnInit } from '@angular/core';
import {Crisis, CrisisService} from "../crisis.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  private crises: Observable<Crisis[]>;
  private selectedId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CrisisService) {

  }

  ngOnInit() {
    this.crises = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getCrises();
      });
  }

  onSelect(crisis: Crisis) {
    this.selectedId = crisis.id;
    this.router.navigate([crisis.id], {relativeTo: this.route});
  }

  isSelected(crisis: Crisis): boolean {
    return this.selectedId === crisis.id;
  }

}
