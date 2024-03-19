import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  favoriteColorControl = new FormControl('');
  favoriteColor = '';

  constructor() { }
 

  ngOnInit(): void {
    this.favoriteColorControl.value;
  }

  novoValor() {

  }


}
