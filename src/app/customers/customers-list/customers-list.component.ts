import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
    private _customers: ICustomer[] = [];
    @Input() get customers(): ICustomer[] {
        return this._customers;
    }

    set customers(value: ICustomer[]) {
        if (value) {
          this.filteredCustomers = this._customers = value;
          this.calculateOrders();
        }
    }

    filteredCustomers: ICustomer[] = [];
    customersOrderTotal: number;
    currencyCode: string = 'USD';

    constructor() {}

    ngOnInit() {

    }

    calculateOrders() {
        // Initialize customersOrderTotal to zero
        this.customersOrderTotal = 0;
        // Loop through filteredCustomers abstracting the customer's orderTotal
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
      });
    }

    sort(prop: string) {
      // A sorter service will handle the sorting

    }
}
