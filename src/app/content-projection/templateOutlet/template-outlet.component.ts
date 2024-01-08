import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.css']
})
export class TemplateOutletComponent implements OnInit {
  selected?: string;
  @Input() options?: string[];
  @Output()selectionChanged = new EventEmitter<string>();
  
  selectOption(option: string) {
    this.selected = option;
    this.selectionChanged.emit(option);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
