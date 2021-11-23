import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DirectiveTestComponent } from './Components/DirectiveTest/DirectiveTest.component';
import { ParentEncaps } from './Components/Encapsulation/ParentEncaps';
import { HomePageComponent } from './Components/Homepage/Homepage.components';
import { HttpTestComponent } from './Components/HttpTest/Httptest.component';
import { LifeCycleParent } from './Components/LifeCycleHooks/LifeCycleParent';
import { PaymentComponent } from './Components/PaymentModule/payment.component';
import { PaymentModule } from './Components/PaymentModule/payment.module';
import { PipeTestComponent } from './Components/PipeTest/Pipe-test.component';
import { ReceicverComponent } from './Components/Receiver/Receiver.component';
import { BasicFormComponent } from './FormHandling/BasicForm.component';
import { CustomCanActivate } from './Guards/CustomCanActivate.guard';
import { CustomCanActivateChild } from './Guards/CustomCanActivateChild.guard';
import { CustomCanDeactivateGuard } from './Guards/CustomCanDeactivate.guard';
import { CustomCanLoadGuard } from './Guards/CustomOnLoad.guard';
import { CustomResolveGuard } from './Guards/CustomResolve.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BasicFormComponent },
  {
    path: 'receiver',
    component: ReceicverComponent,
    canActivate: [CustomCanActivate],
  },
  {
    path: 'pipe',
    component: PipeTestComponent,
    resolve: { resolvedData: CustomResolveGuard },
    canDeactivate: [CustomCanDeactivateGuard],
  },
  { path: 'directive', component: DirectiveTestComponent },
  {
    path: 'http',
    component: HttpTestComponent,
    children: [
      {
        path: 'pipe',
        component: PipeTestComponent,
      },
    ],
    canActivateChild: [CustomCanActivateChild],
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./Components/PaymentModule/payment.module').then(
        (mod) => mod.PaymentModule
      ),
    canLoad: [CustomCanLoadGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
