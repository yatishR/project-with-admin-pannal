
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AgChartsAngular } from 'ag-charts-angular';
import {
  AgCartesianAxisOptions,
  AgCartesianChartOptions,
  AgCartesianSeriesOptions,
  AgCartesianSeriesTooltipRendererParams,
  AgColumnSeriesOptions,
  AgLineSeriesOptions,
} from 'ag-charts-community';
import { getData } from '../../../data';
import { events } from '@material/data-table';
// import {MatTabsModule} from '@angular/material/tabs'
@Component({
  selector: 'app-graph-dashboard',
  templateUrl: './graph-dashboard.component.html',
 // template: ``,
  styleUrls: ['./graph-dashboard.component.scss',],
//  standalone: true,
//   imports: [MatTabsModule],
 // encapsulation: ViewEncapsulation.None
})
export class GraphDashboardComponent {

    public options: AgCartesianChartOptions;
    @ViewChild("myNameElem") myNameElem: ElementRef | undefined;

  @ViewChild(AgChartsAngular)
  public agChart!: AgChartsAngular;
  flag:boolean=false;
  flag1:boolean=false;

  //options.autoSize=false;
  constructor() {
    this.options = {
      autoSize: true,
      data: getData(),
      theme: {
        palette: {
          fills: ['#7cecb3', '#7cb5ec', '#ecb37c', '#ec7cb5', '#7c7dec'],
          strokes: ['#7cecb3', '#7cb5ec', '#ecb37c', '#ec7cb5', '#7c7dec'],
        },
      },
    //   title: {
    //     text: 'Fruit & Vegetable Consumption',
    //     fontSize: 15,
    //   },
      series: COLUMN_AND_LINE,
      axes: [
        {
          type: 'category',
          position: 'bottom',
          gridStyle: [
            {
              stroke: undefined,
            },
          ],
        },
        {
          // primary y axis
          type: 'number',
          position: 'left',
          keys: ['women', 'men', 'children', 'adults'],
        //   title: {
        //     text: 'Adults Who Eat 5 A Day (%)',
        //   },
        },
        {
          // secondary y axis
          type: 'number',
          position: 'right',
          keys: ['portions'],
        //   title: {
        //     text: 'Portions Consumed (Per Day)',
        //   },
        },
      ] as AgCartesianAxisOptions[],
      legend: {
        item: {
          marker: {
            strokeWidth: 0,
          },
        },
      },
    };
  }

  ngOnInit() {}

  columnLine = () => {
    const options = { ...this.options };

    console.log('Column & Line', COLUMN_AND_LINE);
    options.series = COLUMN_AND_LINE;

    this.options = options;
  };

  areaColumn = () => {
    const options = { ...this.options };

    console.log('Column & Area', AREA_AND_COLUMN);
    options.series = AREA_AND_COLUMN;

    this.options = options;
  };


  showKpi(){
    this.flag =true;
    this.flag1 =false;
  }
  showKpiProcurment(){
    this.flag1 =true;
    this.flag =false;
  }
}

function tooltipRenderer(params: AgCartesianSeriesTooltipRendererParams) {
  const { yValue, xValue } = params;
  return {
    content: `${xValue}: ${yValue}%`,
  };
}
const WOMEN: AgColumnSeriesOptions = {
  type: 'column',
  xKey: 'year',
  yKey: 'women',
  yName: 'Women',
  grouped: true,
  strokeWidth: 0,
  tooltip: {
    renderer: tooltipRenderer,
  },
};
const MEN: AgColumnSeriesOptions = {
  type: 'column',
  xKey: 'year',
  yKey: 'men',
  yName: 'Men',
  grouped: true,
  strokeWidth: 0,
  tooltip: {
    renderer: tooltipRenderer,
  },
};
const PORTIONS: AgLineSeriesOptions = {
  type: 'line',
  xKey: 'year',
  yKey: 'portions',
  yName: 'Portions',
  strokeWidth: 3,
  marker: {
    enabled: false,
  },
  tooltip: {
    renderer: tooltipRenderer,
  },
};
const COLUMN_AND_LINE: AgCartesianSeriesOptions[] = [
  { ...WOMEN, type: 'column' },
  { ...MEN, type: 'column' },
  { ...PORTIONS, type: 'line' },
];
const AREA_AND_COLUMN: AgCartesianSeriesOptions[] = [
  { ...PORTIONS, type: 'area' },
  { ...WOMEN, type: 'column' },
  { ...MEN, type: 'column' },
];

//}



