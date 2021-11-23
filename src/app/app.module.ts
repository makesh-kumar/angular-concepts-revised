import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveTestComponent } from './Components/DirectiveTest/DirectiveTest.component';
import { HomePageComponent } from './Components/Homepage/Homepage.components';
import { PipeTestComponent } from './Components/PipeTest/Pipe-test.component';
import { ReceicverComponent } from './Components/Receiver/Receiver.component';
import { isShowDirective } from './Directives/isShow.directive';
import { TextHighlightDirective } from './Directives/TextHiglighter.directive';
import { MakeUpperPipe } from './Pipes/MakeUpper.pipe';
import { TextAppenderPipe } from './Pipes/TextAppender.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestComponent } from './Components/HttpTest/Httptest.component';
import { MyHttpInterceptor } from './Components/HttpTest/Http.interceptor';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { LifeCycleParent } from './Components/LifeCycleHooks/LifeCycleParent';
import { LifeCycleChild } from './Components/LifeCycleHooks/LifeCycleChild';
import { ParentEncaps } from './Components/Encapsulation/ParentEncaps';
import { ChildEncaps } from './Components/Encapsulation/ChilldEncaps';
import { BasicFormComponent } from './FormHandling/BasicForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ReceicverComponent,
    PipeTestComponent,
    TextAppenderPipe,
    MakeUpperPipe,
    TextHighlightDirective,
    DirectiveTestComponent,
    isShowDirective,
    HttpTestComponent,
    LifeCycleParent,
    LifeCycleChild,
    ParentEncaps,
    ChildEncaps,
    BasicFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
