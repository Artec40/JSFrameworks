import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-starter',
  templateUrl: './sort-starter.component.html',
  styleUrls: ['./sort-starter.component.scss']
})
export class SortStarterComponent implements OnInit {

  scrollingDown(){
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
