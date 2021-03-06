import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  sessionId: Observable<string>;

  token: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Capture the session Id if available
    this.sessionId = this.route
      .queryParams
      .map(params => params['session_id'] || 'None');
  }

}
