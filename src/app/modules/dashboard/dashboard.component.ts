import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
 pie = [];

  // bigChart: { name: string; data: number[] }[] = [];
  //  cards: number[] = [];
  //  pie: ({ name: string; y: number; sliced: boolean; selected: boolean; } | { name: string; y: number; sliced?: undefined; selected?: undefined; })[] = [];
  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pie = this.dashboardService.pie();
  }

}
