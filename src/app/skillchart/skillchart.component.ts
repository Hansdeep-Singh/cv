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
  styleUrls: ['./skillchart.component.scss']
})
export class SkillchartComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;


    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['.net Framework', 'C#', 'Entity Framework', 'MVC', 'Material Design', 'HTML5', 'CSS3/SASS', 'ANGULAR', 'SQL Server', 'JavaScript', 'JS Libraries', 'Responsive Design', 'Relational Database', 'RESTful API'],
        datasets: [{
          label: 'My Score',
          data: [90, 95, 90, 70, 90, 93, 96, 86, 90, 89, 75, 96, 94, 86],
          backgroundColor: [
            'rgba(74, 74, 376, 0.5)',
            'rgba(147, 197, 94, 0.5)',
            'rgba(222, 64, 88, 0.5)',
            'rgba(68, 40, 44, 0.5)',
            'rgba(66, 27, 124, 0.5)',
            'rgba(81, 126, 198, 0.5)',
            'rgba(104, 59, 164, 0.5)',
            'rgba(67, 44, 97, 0.5)',
            'rgba(103, 217, 47, 0.5)',
            'rgba(45, 57, 40, 0.5)',
            'rgba(66, 27, 124, 0.5)',
            'rgba(234, 15, 15, 0.5)',
            'rgba(2, 103, 72, 0.5)',
            'rgba(5, 3, 27, 0.5)',

          ],
          borderColor: [
            'rgba(74, 74, 376, 1)',
            'rgba(147, 197, 94, 1)',
            'rgba(222, 64, 88,1)',
            'rgba(68, 40, 44, 1)',
            'rgba(66, 27, 124, 1)',
            'rgba(81, 126, 198, 1)',
            'rgba(104, 59, 164, 1)',
            'rgba(67, 44, 97, 1)',
            'rgba(103, 217, 47, 1)',
            'rgba(45, 57, 40, 1)',
            'rgba(66, 27, 124, 1)',
            'rgba(234, 15, 15, 1)',
            'rgba(2, 103, 72, 1)',
            'rgba(5, 3, 27, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            grid: { offset: true },
            beginAtZero: true
          }
        }
      }
    });
  }


}
