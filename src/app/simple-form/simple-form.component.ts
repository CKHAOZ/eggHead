import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    //encapsulation: ViewEncapsulation.None,
    selector: 'app-simple-form',
    templateUrl: './simple-form.component.html',
    styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

    ismousedown;

    constructor() {
        //setInterval(()=> this.message = Math.random().toString(), 1000);
     }

    ngOnInit() { }

    onClick(value, inputValue) {
        console.log(value);
        console.log(inputValue);
    }

    @Input() message;
    @Output() update = new EventEmitter();
}
