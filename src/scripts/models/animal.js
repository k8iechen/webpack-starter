import { Cat } from './models/cat.js';

export class Animal {
    constructor() {
        this.type = 'cat';
    }
    start() {
        return `Starting: ${this.type}`;
    }
}