import { Component, ViewChild,OnInit  } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RecuitmentManagementComponent } from './recuitment-management/recuitment-management.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(RecuitmentManagementComponent ) child: RecuitmentManagementComponent | undefined ;
  constructor(
    private primengConfig: PrimeNGConfig,
    ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
}

  title = 'fa-recuitment-app';
}
