import { Component, OnInit } from '@angular/core';
import { SystemCPU } from 'src/app/Common/system-CPU';
import { SystemlHealth } from 'src/app/Common/system-health';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tracesList:any[]=[];
  selectedTrace:any;
  systemHealth:SystemlHealth;
  systemCPU:SystemCPU;
  processUptime:String;
  http200Traces:any[]=[];
  http400Traces:any[]=[];
  http404Traces:any[]=[];
  http500Traces:any[]=[];
  httpDefaultTraces:any[]=[];

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.getTraces();
  }

  private getTraces(): void{
    this.dashboardService.getHttpTraces().subscribe(
      (response:any) => {
        console.log(response.traces);
        this.processTraces(response.traces);
      }
    );
  }

  private processTraces(response:any): void{

  }

}
