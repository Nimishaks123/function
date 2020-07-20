import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }
  value1:Number
  show()
  {
    alert(this.value1)
  }
  ngOnInit(): void {
  }

}
