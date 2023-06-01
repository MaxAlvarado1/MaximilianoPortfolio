import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  home: boolean = true;

  constructor(private router: Router ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )

    .subscribe(event => {  
      if(this.router.url == "/" || this.router.url == "/contact") {
        this.home = false;
      }
      else {
        this.home = true;
      }
    });
  }

  ngOnInit(): void { 
  }

}
