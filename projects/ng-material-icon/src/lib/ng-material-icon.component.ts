import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ng-material-icon',
    templateUrl: './ng-material-icon.component.html',
    styleUrls: ['./ng-material-icon.component.scss']
})
export class NgMaterialIconComponent implements OnInit {

    constructor() { }

    @Input() icon;
    @Input() size;
    @Input() color;


    ngOnInit() {

    }

}
