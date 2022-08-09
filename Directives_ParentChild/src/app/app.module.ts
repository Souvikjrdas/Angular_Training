import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import {AdminModule} from "./admin/admin.module";
import {User1Module} from "./user1/user1.module";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CustomDirectiveDirective,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    User1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
