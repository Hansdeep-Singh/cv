import { Component, OnInit } from '@angular/core';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

@Component({
    selector: 'app-skillchart',
    templateUrl: './skillchart.component.html',
    styleUrls: ['./skillchart.component.scss'],
    standalone: false
})
export class SkillchartComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;


    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['AI Agentic Development', '.net Framework', 'C#', 'AZURE DevOps', 'AZURE Portal', 'Entity Framework', 'MVC', 'Angular Framework', 'React Framework', 'Node.js', 'Material Design', 'GitHub', 'HTML5', 'CSS3/SASS', 'SQL Server', 'JavaScript Modern', 'TypeScript', 'Responsive Design', 'Relational Database', 'RESTful API',],
        datasets: [{
          label: 'My Score',
          data: [80, 90, 95, 95, 95, 85, 85, 90, 67, 93, 96, 86, 90, 89, 92, 90, 96, 94, 86, 95],
          backgroundColor: 'rgba(63, 94, 251, 0.55)',
          borderColor: 'rgba(63, 94, 251, 1)',
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
          duration: 4500
        },
        indexAxis: 'y',
        scales: {
          y: {
            grid: { offset: true },
            beginAtZero: true,
            ticks: {
              autoSkip: false
            }
          }
        }
      }
    });
  }


}
