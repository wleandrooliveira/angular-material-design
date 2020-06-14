import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

// Material

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule, 
    ReactiveFormsModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [CustomersListComponent, CustomerCardComponent, CustomerNewComponent]
})
export class CustomersModule { }
