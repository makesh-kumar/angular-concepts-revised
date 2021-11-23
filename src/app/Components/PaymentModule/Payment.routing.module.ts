import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayComponent } from './Gateway.component';
import { PaymentComponent } from './payment.component';

const route: Routes = [
  {
    path: '',
    component: PaymentComponent,
  },
  {
    path: 'gateway',
    component: GatewayComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(route)],
})
export class PaymentRoutingModule {}
