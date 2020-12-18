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
public dataSource = {
    datasets: [
        {
            data:[],
            backgroundColor: [
                '#ff3364',
                '#808080',
                '#acff33',
                '#fd6b19',
                '#859b45',
                '#9b4593',
                '#4f459b',
                '#459b7e',
                '#410e12'
            ],
        }
    ],

    labels: []
  };
  userId: any;
  
  //budgetData: UserBudget[];


  constructor(private budgetService: BudgetService,
              private authService: AuthService) { }

   ngOnInit(): void {
     this.userId = this.authService.userId;
  this.budgetService.getChartData(this.userId)
    .subscribe((res:any) => {
      for (var i=0;i <res.length; i++) {
      this.dataSource.datasets[0].data[i]= res[i].budget;
      this.dataSource.labels[i]= res[i].title;

    }
    console.log("budget array",this.dataSource);
     this.createChart();
      //console.log("budget object",budgetValue);

});

}

createChart() {
  var ctx = document.getElementById('myChart');
  var myPieChart = new Chart(ctx, {
  type: 'pie',
  data:this.dataSource,
}
);

}

}
