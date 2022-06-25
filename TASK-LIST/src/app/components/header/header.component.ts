import { Component, OnInit, Input } from '@angular/core';
import { UiserviceService } from 'src/app/service/uiservice.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'My Task List';
  showAddTask : boolean = false;
  subscription? : Subscription

  constructor( 
      private Uiservice : UiserviceService,
      private router : Router
    ) { 
    this.subscription = this.Uiservice.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.Uiservice.toggleAddTask()
  }

  hasRoute(route : String){
    return this.router.url === route;
  }

}
