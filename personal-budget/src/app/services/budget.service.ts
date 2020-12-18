import {map} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';

import { UserBudget } from '../models/User_budget';
import { User } from '../models/User';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private url = 'http://localhost:3000/budget';
  private endpoint = 'http://localhost:3000/budget/getBudget';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  fetchBudget(): Observable<UserBudget[]> {
    return this.http
      .get<UserBudget[]>(this.url, { responseType: 'json' })
      .pipe(
        catchError(this.errorHandlerService.handleError<UserBudget[]>('fetchBudget', []))
      );
  }
  fetchBudgetUser(userId) {
    console.log("myid",userId);
    return this.http
      .get<UserBudget[]>(`${this.endpoint}/${userId}`, { responseType: 'json' })
      .pipe(
        catchError(this.errorHandlerService.handleError<UserBudget[]>('fetchBudgetUser', []))
      );

  }

  getChartData(userId){
    //console.log("chart id",userId);
      return this.http.get(`${this.endpoint}/${userId}`,{ responseType: 'json' })

  }



  addBudgets(
    formData: Partial<UserBudget>,
    userId: Pick<UserBudget, 'id'>
  ): Observable<UserBudget> {
    return this.http
      .post<UserBudget>(
        this.url,
        { userId, title: formData.title, value: formData.value,
          month: formData.month, tags: formData.tags,amount: formData.amount },
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandlerService.handleError<UserBudget>('addBudgets'))
      );
  }

  deleteBudget(budgetId: Pick<UserBudget, 'id'>): Observable<{}> {
    return this.http
      .delete<UserBudget>(`${this.url}/${budgetId}`, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<UserBudget>('deleteBudget'))
      );
  }
}
