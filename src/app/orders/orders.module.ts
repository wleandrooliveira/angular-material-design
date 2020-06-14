import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';

// Material
import { MatTabsModule } from '@angular/material/tabs';
import { OrderNewComponent } from './order-new/order-new.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTabsModule
  ],
  declarations: [OrdersListComponent, OrderNewComponent]
})
export class OrdersModule { }
