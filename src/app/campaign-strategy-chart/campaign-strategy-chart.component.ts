import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

import { GetCampaignResDtoInterface, KeywordTypes, KeywordTypesNames } from '@common';
import { StrategyValuesByType } from '@state/strategies';

Chart.defaults.global.defaultFontFamily = '\'Roboto\', sans-serif';
Chart.defaults.global.defaultFontColor = '#212121';
Chart.defaults.global.defaultFontSize = 11;

@Component({
  selector: 'app-campaign-strategy-chart',
  templateUrl: './campaign-strategy-chart.component.html',
  styleUrls: ['./campaign-strategy-chart.component.scss'],
})
export class CampaignStrategyChartComponent implements OnInit, OnChanges {
  private chart: Chart;
  startCase = _.startCase;

  public campaign$: Observable<GetCampaignResDtoInterface>;

  public constructor() {}

  @ViewChild('chartCanvas') chartCanvas: ElementRef;
  @Input('strategyData') strategyData: StrategyValuesByType;
  @Input('customOptions') customOptions: Chart.ChartConfiguration['options'];

  public renderChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: _.range(1, 11) as any,
        datasets: [],
      },
      options: {
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0, // disables bezier curves
          },
          point: {
            radius: 2,
          },
        },
        animation: {
          duration: 0,
        },
        tooltips: {
          mode: 'index',
          position: 'nearest',
          callbacks: {
            title: (tooltipItems, data) => `ARH: ${data.labels[tooltipItems[0].index]}`,
            label: (tooltipItem, data) =>
              `${data.datasets[tooltipItem.datasetIndex].label}: ${_.round(Number(_.get(tooltipItem, 'value')), 2)}%`,
          },
        },
        hover: {
          mode: 'index',
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Target Imps Share',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 10,
                min: 0,
                max: 100,
                callback: (value: number) => `${value}%`,
                fontColor: '#9E9E9E',
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Average Retail Health',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 1,
                min: 0,
                max: 10,
                fontColor: '#9E9E9E',
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
        ...this.customOptions,
      },
    });
  }

  private generateLine({ data, color, label }: { data: number[], color: string, label: string }): Chart.ChartDataSets {
    return {
      data,
      label,
      pointBackgroundColor: color,
      borderColor: color,
      fill: false,
      pointStyle: 'circle',
    };
  }

  public ngOnInit(): void {
    this.renderChart();

    this.refreshChartData();
  }

  private refreshChartData() {
    const { brandDataset, genericDataset, competitorDataset } = this.prepareChartLines();
    this.chart.data.datasets = [brandDataset, genericDataset, competitorDataset];
    this.chart.update();
  }

  private prepareChartLines() {
    const brandDataset = this.generateLine({
      data: _.get(this.strategyData, KeywordTypes.BRAND),
      color: '#2962FF',
      label: _.capitalize(KeywordTypesNames.BRAND),
    });
    const genericDataset = this.generateLine({
      data:  _.get(this.strategyData, KeywordTypes.GENERIC),
      color: '#F2994A',
      label: _.capitalize(KeywordTypesNames.GENERIC),
    });
    const competitorDataset = this.generateLine({
      data:  _.get(this.strategyData, KeywordTypes.COMPETITOR),
      color: '#D50000',
      label: _.capitalize(KeywordTypesNames.COMPETITOR),
    });
    return { brandDataset, genericDataset, competitorDataset };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.chart) {
      return;
    }

    this.refreshChartData();
  }


}
