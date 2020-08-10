import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userName: string;
  response: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.userName = '';
  }
  // tslint:disable-next-line:typedef
  search() {
      this.http.get('https://api.github.com/search/users?q=' + this.userName)
        .subscribe((response) => {
          this.response = response;
          console.log(this.response);
        });

  }

}
