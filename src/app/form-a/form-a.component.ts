import { Component } from '@angular/core';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent {
  public selectedOption: any;
  selected(e: any) {
    this.selectedOption = e.target.value;
  }
}
