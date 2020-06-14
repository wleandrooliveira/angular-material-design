import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';

// Material

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CustomerNewComponent } from './customer-new/customer-new.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [CustomersListComponent, CustomerCardComponent, CustomerNewComponent]
})
export class CustomersModule { }
