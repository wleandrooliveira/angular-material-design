import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageNewComponent } from './message-new/message-new.component';

// Material

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule

  ],
  declarations: [MessagesListComponent, MessageNewComponent]
})
export class MessagesModule { }
