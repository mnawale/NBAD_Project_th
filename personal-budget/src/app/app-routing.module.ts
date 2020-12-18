import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./services/auth-guard.service";

import { HomeComponent } from "./components/home/home.component";
import { BudgetsComponent } from "./components/budgets/budgets.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { ChartsComponent } from './components/charts/charts.component';
import { BargraphComponent } from './components/bargraph/bargraph.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { CreateBudgetComponent } from './components/add-budget/add-budget.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "budgets", component: BudgetsComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "PieChart", component: ChartsComponent },
  { path: "signup", component: SignupComponent },
  { path: "linegraph", component: BargraphComponent },
  { path: "barchart", component: BarchartComponent },
  { path: "createbudget",component:CreateBudgetComponent},
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
