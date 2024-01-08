import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mult-content',
  templateUrl: './mult-content.component.html',
  styleUrls: ['./mult-content.component.css']
})
export class MultContentComponent implements OnInit {
  
  view:boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.view = true;
  }

}
