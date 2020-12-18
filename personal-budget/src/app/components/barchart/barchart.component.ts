import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import {Chart} from 'chart.js';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
userId: any;
  chart: any;
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
        type:'bar',
        data: {
          labels:title,
          datasets:[
            {data:budget,
            backgroundColor: '#0099cc',
            fill:false
            },

            {
              data:amount,
            backgroundColor: '#c1f0f0',
            fill:false
            }
          ]
        },
        options:{
          legend:{
            display:false
          },
          scales:{
            xAxes:[{display: true}],
            yAxes:[{display:true}]
          }
        }
      })
    })
  }

}
