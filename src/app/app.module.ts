import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GridModule, ToolbarService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,     GridModule,
        ToolbarModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
      providers: [ToolbarService, GroupService]

})
export class AppModule { }
