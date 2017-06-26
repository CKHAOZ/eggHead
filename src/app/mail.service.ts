import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

    message = `you've got mail`;

    messages = [
        { id:0, text: `you're now friend with John`},
        { id:1, text: `John liked your tweet`},
        { id:2, text: `you'll never believe what John said...`}
    ]

    constructor() { }

    update(id, text){
        this.messages = this.messages.map(m => m.id === id ? {id, text} : m);
    }
}
