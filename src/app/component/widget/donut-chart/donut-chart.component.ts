import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";

import { PieChartComponent } from '../pie-chart/pie-chart.component'

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent extends PieChartComponent implements OnInit{
    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
    }

    initSvg() {
        this.color = d3Scale.scaleOrdinal()
                            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
        this.arc = d3Shape.arc()
                        .outerRadius(this.radius - 10)
                        .innerRadius(70);
        this.labelArc = d3Shape.arc()
                            .outerRadius(this.radius - 40)
                            .innerRadius(this.radius - 40);
        this.pie = d3Shape.pie()
                        .sort(null)
                        .value((d: any) => d.population);
        this.svg = d3.select("#donut-chart-div").select("#donut-chart")
                    .append("g")
                    .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
    }
}