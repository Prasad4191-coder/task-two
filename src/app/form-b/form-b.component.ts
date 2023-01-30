import { Component } from '@angular/core';

@Component({
  selector: 'app-form-b',
  templateUrl: './form-b.component.html',
  styleUrls: ['./form-b.component.css']
})
export class FormBComponent {
  public selectedOption : any;
  selected(e:any){
    this.selectedOption = e.target.value;
  }
}
