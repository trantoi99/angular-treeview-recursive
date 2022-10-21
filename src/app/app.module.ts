import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FeatureFlagsDirective } from './feature-flags.directive';
import { UserService } from './user.service';
import { TreeviewComponent } from './treeview/treeview.component';
import { DataService } from './data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FeatureFlagsDirective, TreeviewComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService, DataService]
})
export class AppModule { }
