import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import {Chart} from 'chart.js';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.scss']
})
export class BargraphComponent implements OnInit {
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
        type:'line',
        data: {
          labels:title,
          datasets:[
            {data:budget,
            borderColor: '#0099ff',
            fill:false
            },

            {
              data:amount,
            borderColor: '#339933',
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
