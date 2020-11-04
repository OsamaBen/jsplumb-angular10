import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FlowchartComponent} from './flowchart';
import {jsPlumbService} from 'jsplumbtoolkit-angular';
import {Dialogs, jsPlumbToolkit, jsPlumbUtil} from 'jsplumbtoolkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  constructor(private $jsplumb: jsPlumbService, private elementRef: ElementRef) {
    this.toolkitId = this.elementRef.nativeElement.getAttribute('toolkitId');
  }

  @ViewChild(FlowchartComponent) flowchart: FlowchartComponent;
  // @ViewChild(DatasetComponent) dataset:DatasetComponent;

  toolkitId: string;
  toolkit: jsPlumbToolkit;

  toolkitParams = {
    nodeFactory: (type: string, data: any, callback: Function) => {
      Dialogs.show({
        id: 'dlgText',
        title: 'Enter ' + type + ' name:',
        onOK: (d: any) => {
          data.text = d.text;
          // if the user entered a name...
          if (data.text) {
            // and it was at least 2 chars
            if (data.text.length >= 2) {
              // set an id and continue.
              data.id = jsPlumbUtil.uuid();
              callback(data);
            }
            else {
              // else advise the user.
              alert(type + ' names must be at least 2 characters!');
            }
          }
          // else...do not proceed.
        }
      });
    },
    beforeStartConnect: (node: any, edgeType: string) => {
      return { label: '...' };
    }
  };

  ngOnInit(): void {
    this.toolkit = this.$jsplumb.getToolkit(this.toolkitId, this.toolkitParams);
  }

  ngAfterViewInit(): void {
    this.toolkit.load({ url: 'data/copyright.json' });
  }
}
