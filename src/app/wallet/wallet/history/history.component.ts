import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  @ViewChild('transactions') transactions: any;
  @ViewChild('chart') chart: ChartComponent;

  chartOptions: any;
  pieChartOptions: any;

  categories: Array<any> = [
    { title: 'All transactions', value: 'all', icon: '' },
    { title: 'Sent', value: 'sent_to', icon: 'send' },
    { title: 'Received', value: 'receive', icon: 'receive' },
    { title: 'Staked', value: 'mint_by_stake', icon: 'stake' },
    { title: 'Mined', value: 'mined', icon: 'transfer' },
    {
      title: 'Masternode Reward',
      value: 'masternode_reward',
      icon: 'transfer',
    },
    {
      title: 'Balance Transfers',
      value: 'payment_to_yourself',
      icon: 'transfer',
    },
    // { title: 'Immature',         value: 'immature'          },
    // { title: 'Coinbase',         value: 'coinbase'          },
    // { title: 'Orphan',           value: 'orphan'            },
    // { title: 'Orphaned stake',   value: 'orphaned_stake'    },
  ];

  sortings: Array<any> = [
    { title: 'By time', value: 'time' },
    { title: 'By amount', value: 'amount' },
    { title: 'By address', value: 'address' },
    { title: 'By category', value: 'category' },
    { title: 'By confirmations', value: 'confirmations' },
    { title: 'By transaction ID (txid)', value: 'txid' },
  ];

  types: Array<any> = [
    { title: 'All types', value: 'all' },
    { title: 'Public', value: 'standard' },
  ];

  filters: any = {
    category: undefined,
    search: undefined,
    sort: undefined,
    type: undefined,
  };

  public selectedTab: number = 0;

  constructor() {
    this.default();
  }

  ngOnInit(): void {
    /* may be used if we concatenate some filters http://bit.ly/2Buav9B */
  }

  default(): void {
    this.selectedTab = 0;
    this.filters = {
      category: 'all',
      type: 'all',
      sort: 'time',
      search: '',
    };

    this.pieChartOptions = {
      title: {
        text: '',
      },
      chart: { type: 'pie', height: 100 },
      series: [
        {
          data: [
            { y: 75, color: '#00a519' },
            { y: 25, color: '#f87c00' },
          ],
          dataLabels: {
            enabled: false,
          },
        },
      ],
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          size: 300,
        },
      },
    };

    this.chartOptions = {
      title: {
        text: '',
      },
      chart: { zoomType: 'x', type: 'column', height: 200 },
      series: [
        {
          // colorByPoint: true,
          units: [['values', [500, 1000, 1500, 2000, 2500]]],
          data: [
            [1500],
            [71.5],
            [1],
            [1],
            [1],
            [1],
            [1],
            [800],
            [1290],
            [2340],
            [2340],
            [1],
            [1],
            [1],
            [1],
            [1],
            [650],
            [640],
            [1],
            [1],
            [1],
            [560],
            [1],
            [1],
            [450],
            [640],
            [560],
            [450],
            [1],
            [1],
            [1],
            [1],
            [1],
            [645],
            [6],
            [455],
            [1],
          ],
          dataLabels: {
            enabled: false,
            color: '#ffffff',
            align: 'right',
            format: '{point.y:.1f}',
            y: 10,
            style: {
              fontSize: '1rem',
              padding: '0.2rem',
            },
          },
        },
      ],
      xAxis: {
        // type: "category",
        labels: {
          style: {
            fontSize: 10,
            textDecoration: 'uppercase',
          },
        },
        lineColor: 'transparent',
      },
      yAxis: {
        gridLineColor: 'transparent',
        title: {
          text: '',
        },
        max: 2500,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        series: {
          pointWidth: 8,
        },
        column: {
          color: '#00a519',
          borderRadius: 4,
        },
      },
    };

    for (let i = 0; i < this.chartOptions.series[0].data.length; i++) {
      let tmp = this.chartOptions.series[0].data[i];
      this.chartOptions.series[0].data[i] = {
        y: tmp[0] < 250 ? 250 : tmp[0],
        color: tmp[0] === 1 ? '#e3e6e8' : '#00a519',
      };
    }

    // this.chartOptions = {
    //   series: [
    //     {
    //       data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    //     },
    //   ],
    //   chart: {
    //     type: "bar",
    //     height: 350,
    //   },
    //   plotOptions: {
    //     bar: {
    //       horizontal: true,
    //     },
    //   },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   xaxis: {
    //     categories: [
    //       "South Korea",
    //       "Canada",
    //       "United Kingdom",
    //       "Netherlands",
    //       "Italy",
    //       "France",
    //       "Japan",
    //       "United States",
    //       "China",
    //       "Germany",
    //     ],
    //   },
    // };
  }

  changeCategory(index: number): void {
    this.selectedTab = index;
    this.transactions.resetPagination();
    this.filters.category = this.categories[index].value;
    this.filter();
  }

  sortList(event: any): void {
    this.filters.sort = event.value;
    this.filter();
  }

  filter(): void {
    this.transactions.filter(this.filters);
  }

  clear(): void {
    this.default();
    this.filter();
  }
}
