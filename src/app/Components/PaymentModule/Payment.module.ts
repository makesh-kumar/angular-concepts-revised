import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GatewayComponent } from './Gateway.component';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './Payment.routing.module';

@NgModule({
  declarations: [PaymentComponent, GatewayComponent],
  exports: [PaymentComponent],
  imports: [CommonModule, PaymentRoutingModule],
})
export class PaymentModule {}
