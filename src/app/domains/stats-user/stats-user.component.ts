import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart, registerables} from "chart.js";
import {StatsService} from "../../services/stats.service";
import {map, Subject} from "rxjs";
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-stats-user',
  templateUrl: './stats-user.component.html',
  styleUrls: ['./stats-user.component.scss'],
  providers: [StatsService]
})
export class StatsUserComponent implements OnInit {
  data: any
  canvas: any;
  ctx: any;
  canvas1: any;
  ctx1: any;

  @ViewChild('mychart') mychart: any
  @ViewChild('mychart1') mychart1: any

  constructor(private stats: StatsService) {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
  }

  ngOnInit() {
    this.stats.getApi()
      .pipe(
        map((value: any) => value.data)
      )
      .subscribe(
        (value: any) => this.data = value,
        err => console.log(err),
        () => this.createChart()
      )
  }

  createChart() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.canvas1 = this.mychart1.nativeElement;
    this.ctx1 = this.canvas1.getContext('2d');


    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'hello',
          data: this.data,
          borderColor: '#af7235',
          parsing: {
            yAxisKey: 'qty_shk_cat1'
          },
          datalabels: {
            formatter: function (value) {
              return value.qty_shk_cat1;
            }
          }
          },
          {
            label: 'hello',
            data: this.data,
            borderColor: '#a5af35',
            parsing: {
              yAxisKey: 'qty_shk_cat2'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat2;
              }
            }
          },
          {
            label: 'hello',
            data: this.data,
            borderColor: '#8c35af',
            parsing: {
              yAxisKey: 'qty_shk_cat3'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat3;
              }
            }
          },
          {
            label: 'hello',
            data: this.data,
            borderColor: '#5eaf35',
            parsing: {
              yAxisKey: 'qty_shk_cat4'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat4;
              }
            }
          },
          {
            label: 'hello',
            data: this.data,
            borderColor: '#359daf',
            parsing: {
              yAxisKey: 'qty_shk'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk;
              }
            }
          }]
      },
      options: {
        parsing: {
          xAxisKey: 'dt_date'
        },
        elements: {
          line: {
            tension: 0.4
          }
        },
        plugins: {
          datalabels: {
            color: 'black',
            backgroundColor: 'white',
            borderRadius: 15,
            align: 'top'
          }
        }
      },

    });


    let shk1 = 0,
        shk2 = 0,
        shk3 = 0,
        shk4 = 0;

    this.data.forEach((value: any) => {
      shk1 += value.qty_shk_cat1
      shk2 += value.qty_shk_cat2
      shk3 += value.qty_shk_cat3
      shk4 += value.qty_shk_cat4
    })

    new Chart(this.ctx1, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Purple'],
        datasets: [{
          data: [shk1, shk2, shk3, shk4],
          parsing: {
            key: 'qty_shk'
          },
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(31,67,110)',
          ],
          hoverOffset: 4
        }]
      },
      options: {
        plugins: {
          datalabels: {
            formatter() {
              return null
            }
          }
        }
      }

    })
  }

  log() {
    console.log(this.data)
  }
}
