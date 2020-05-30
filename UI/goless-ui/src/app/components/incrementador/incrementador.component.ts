import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input()progress: number = 50;
  @Input()labels: string = 'label';
  @Output() newValueUpdate: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Progress= ' + this.progress);
    console.log('Label= ' + this.labels);
  }

  ngOnInit(): void {
    console.log('Progress= ' + this.progress);
    console.log('Label= ' + this.labels);
  }

  valueUpdate(numbers: number) {
    if (this.progress >= 100 && numbers > 0){
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && numbers < 0){
      this.progress = 0;
      return;
    }
    this.progress = this.progress + numbers;
    this.newValueUpdate.emit(this.progress);
  }

  onChange(newValue: number) {
    if ( newValue >= 100){
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.txtProgress.nativeElement.value = this.progress;
    this.newValueUpdate.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }
}
