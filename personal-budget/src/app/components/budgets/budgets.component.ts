import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { BudgetService } from 'src/app/services/budget.service';
import { AuthService } from 'src/app/services/auth.service';

import { UserBudget } from 'src/app/models/User_budget';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss'],
})
export class BudgetsComponent implements OnInit {
  budgets$: Observable<UserBudget[]>;
  userId: any;

  constructor(
    private budgetService: BudgetService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.userId;
    this.budgets$ = this.fetchBudget();

    console.log("budget_show",this.userId);
    console.log("details",this.budgets$);
  }

  fetchBudget(): Observable<UserBudget[]> {
    console.log("budget c",this.userId);
    return this.budgetService.fetchBudgetUser(this.userId);
  }


  addBudgets(): void {
    this.budgets$ = this.fetchBudget();
  }

  delete(budgetId: Pick<UserBudget, 'id'>): void {
    this.budgetService
      .deleteBudget(budgetId)
      .subscribe(() => (this.budgets$ = this.fetchBudget()));
  }
}
