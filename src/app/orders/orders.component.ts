import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [ './orders.component.css' ]
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(private dataService: DataService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    // + sign converts to a number
    let id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      //update the orders array with the fetched orders
      this.orders = orders;
    });

    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      //update the customer with the fetched customer
      this.customer = customer;
    });
  }
}
