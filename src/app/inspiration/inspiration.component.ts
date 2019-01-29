import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {

  numbers: number[];
  constructor() { }

  ngOnInit() {
    /*for(let i = 0; i < 10; i ++) {
      this.numbers[i] = i;
    }*/
  }

}
