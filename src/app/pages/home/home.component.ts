import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';
import {DepartmentService} from '../../services/department.service';
import {ProfessorsService} from '../../services/professors.service';
import {SujetsService} from '../../services/sujets.service';
import {EntreprisesService} from '../../services/entreprises.service';
import {SoutenancesService} from '../../services/soutenances.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public departmentService: DepartmentService,
              public professorsService: ProfessorsService,
              public sujetsService: SujetsService,
              public entreprisesService: EntreprisesService,
              public soutenancesService: SoutenancesService) {
  }

  departments;
  nbMI = 0;
  nbPI = 0;
  nbCB = 0;
  nbSSLF = 0;

  nbAccepted = 0;
  nbRefused = 0;
  nbPending = 0;

  nbTunisia = 0;
  nbAbroad = 0;

  nbJan = 0;
  nbFev = 0;
  nbMar = 0;
  nbAvr = 0;
  nbMai = 0;
  nbJun = 0;
  nbJul = 0;
  nbAou = 0;
  nbSep = 0;
  nbOct = 0;
  nbNov = 0;
  nbDec = 0;

  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  ngOnInit(): void {
    this.getDepartments();
    this.getProfessors();
    this.getSubjects();
    this.getEntreprises();
    this.getSoutenances();
    this.chartColor = '#FFFFFF';
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe((data) => {
      console.log(data);
      this.departments = data;
    });
  }

  getProfessors(): void {
    this.professorsService.getAllProfessors().subscribe((data) => {
      this.nbMI = data.filter((item) => item.department === 'MI').length;
      this.nbCB = data.filter((item) => item.department === 'CB').length;
      this.nbPI = data.filter((item) => item.department === 'PI').length;
      this.nbSSLF = data.filter((item) => item.department === 'SSLF').length;


      this.canvas = document.getElementById('chartEmail');
      this.ctx = this.canvas.getContext('2d');
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: ['MI', 'PI', 'CB', 'SSLF'],
          datasets: [{
            label: 'Emails',
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#e3e3e3',
              '#4acccd',
              '#fcc468',
              '#ef8157'
            ],
            borderWidth: 0,
            data: [this.nbMI, this.nbPI, this.nbCB, this.nbSSLF]
          }]
        },

        options: {

          legend: {
            display: true
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: 'transparent',
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: 'transparent'
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });
    });
  }

  getSubjects(): void {
    this.sujetsService.getAllSujets().subscribe((data) => {
      this.nbAccepted = data.filter((item) => item.status === 'ACCEPTED').length;
      this.nbPending = data.filter((item) => item.status === 'PENDING').length;
      this.nbRefused = data.filter((item) => item.status === 'REFUSED').length;

      this.canvas = document.getElementById('chartSubjects');
      this.ctx = this.canvas.getContext('2d');
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: ['Accepted', 'Pending', 'Refused'],
          datasets: [{
            label: 'Emails',
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#e3e3e3',
              '#4acccd',
              '#ef8157'
            ],
            borderWidth: 0,
            data: [this.nbAccepted, this.nbPending, this.nbRefused]
          }]
        },

        options: {

          legend: {
            display: true
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: 'transparent',
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: 'transparent'
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });
    });
  }

  getEntreprises(): void {
    this.entreprisesService.getAllEntreprises().subscribe((data) => {
      this.nbTunisia = data.filter((item) => item.country === 'Tunisia').length;
      this.nbAbroad = data.length - this.nbTunisia;

      this.canvas = document.getElementById('chartEntreprises');
      this.ctx = this.canvas.getContext('2d');
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: ['Tunisia', 'Abroad'],
          datasets: [{
            label: 'Emails',
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#4acccd',
              '#EF8157'
            ],
            borderWidth: 0,
            data: [this.nbTunisia, this.nbAbroad]
          }]
        },

        options: {

          legend: {
            display: true
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: 'transparent',
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: 'transparent'
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });
    });
  }

  getSoutenances(): void {
    this.soutenancesService.getAllSoutenances().subscribe((data) => {
      data.forEach((item) => {
        const month = new Date(item.dateTime).getMonth();
        if (month + 1 === 1) { this.nbJan++; }
        if (month + 1 === 2) { this.nbFev++; }
        if (month + 1 === 3) { this.nbMar++; }
        if (month + 1 === 4) { this.nbAvr++; }
        if (month + 1 === 5) { this.nbMai++; }
        if (month + 1 === 6) { this.nbJun++; }
        if (month + 1 === 7) { this.nbJul++; }
        if (month + 1 === 8) { this.nbAou++; }
        if (month + 1 === 9) { this.nbSep++; }
        if (month + 1 === 10) { this.nbOct++; }
        if (month + 1 === 11) { this.nbNov++; }
        if (month + 1 === 12) { this.nbDec++; }
      });


      this.canvas = document.getElementById('chartHours');
      this.ctx = this.canvas.getContext('2d');

      this.chartHours = new Chart(this.ctx, {
        type: 'line',

        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            borderColor: '#f17e5d',
            backgroundColor: '#f17e5d',
            pointRadius: 0,
            pointHoverRadius: 0,
            borderWidth: 3,
            data: [this.nbJan, this.nbFev, this.nbMar, this.nbAvr, this.nbMai, this.nbJun, this.nbJul, this.nbAou,
              this.nbSep, this.nbOct, this.nbNov, this.nbDec]
          }
          ]
        },
        options: {
          legend: {
            display: false
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                fontColor: '#9f9f9f',
                beginAtZero: false,
                maxTicksLimit: 5,
                //padding: 20
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: '#ccc',
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: 'transparent',
                display: false,
              },
              ticks: {
                padding: 20,
                fontColor: '#9f9f9f'
              }
            }]
          },
        }
      });
    });
  }
}
