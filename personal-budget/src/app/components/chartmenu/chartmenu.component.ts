import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-chartmenu',
  templateUrl: './chartmenu.component.html',
  styleUrls: ['./chartmenu.component.scss']
})
export class ChartmenuComponent implements OnInit {
 isAuthenticated = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

}
