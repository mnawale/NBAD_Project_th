import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { AuthService } from 'src/app/services/auth.service';
import { Chart } from 'chart.js';
import { UserBudget } from 'src/app/models/User_budget';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class ChartsComponent implements OnInit {
  chart: any;
  userId: any;




  constructor(private budgetService: BudgetService,
              private authService: AuthService) { }

   ngOnInit(): void {
     this.userId = this.authService.userId;
    this.budgetService.getChartData(this.userId)
    .subscribe((res:any) =>{
      let title= res.map(res=>res.title);
      let budget= res.map(res=>res.budget);
      let amount= res.map(res=>res.amount);
      console.log("bargraph",title);
      console.log("bargraph1",budget);
      console.log("bargraph2",amount);
      this.chart = new Chart('canvas',{
        type:'pie',
        data: {
          labels:title,
          datasets:[
            {data:budget,
            backgroundColor: ['#ff3364','#808080','#acff33','#fd6b19','#859b45',
                '#9b4593','#4f459b','#459b7e', '#410e12'],
          
            },
          ]
        },

      })
    })

}


}
