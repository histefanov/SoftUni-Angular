import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  providers: [PostService]
})
export class AsideComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
