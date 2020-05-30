import {Component, Input, OnInit} from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {
  @Input() public labels: Label[] = [];
  @Input() public data: MultiDataSet = [];
  @Input() public type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
