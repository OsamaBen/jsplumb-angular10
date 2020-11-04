import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {jsPlumbToolkitDragDropModule} from 'jsplumbtoolkit-angular-drop';
import {jsPlumbToolkitModule} from 'jsplumbtoolkit-angular';
import {ControlsComponent} from './controls';
import {FlowchartComponent} from './flowchart';
import {ActionNodeComponent, OutputNodeComponent, QuestionNodeComponent, StartNodeComponent} from './components';

@NgModule({
  declarations: [
    AppComponent , QuestionNodeComponent, ActionNodeComponent, StartNodeComponent,
    OutputNodeComponent, FlowchartComponent, ControlsComponent
  ],
  imports: [
    BrowserModule , jsPlumbToolkitModule, jsPlumbToolkitDragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ QuestionNodeComponent, ActionNodeComponent, StartNodeComponent, OutputNodeComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
