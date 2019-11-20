import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './data';

@Component({
    selector: 'my-app',
    template: `<ejs-grid #grid [dataSource]='data' [toolbar]='toolbar' height='200px' [allowGrouping]='true' [groupSettings]='groupOptions'>
                <ng-template #toolbarTemplate let-data>
                    <ejs-toolbar (clicked)='clickHandler($event)'>
                        <e-items>
                            <e-item id='collapse' prefixIcon='e-collapse'></e-item>
                        </e-items>
                    </ejs-toolbar>
                </ng-template>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public groupOptions: any;
    public toolbar: any;

    @ViewChild('grid',{static: true})
    public grid: any;

    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { columns: ['CustomerID'] };
                this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }];

    }

    clickHandler(args: ClickEventArgs): void {
        let target: HTMLElement = (<HTMLElement>args.originalEvent.target).closest('button'); //find clicked button
        if (target.id === 'collapse') {
            //collapse all expanded grouped row
            this.grid.groupModule.collapseAll();
        }
    }
}