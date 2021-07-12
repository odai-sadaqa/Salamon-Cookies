'use strict';

let Seattle= {
    name: 'Seattle',
    maxCustomer:65,
    minCusomer:23,
    averCustomer:6.3,
    customerPerhours:0,
    randomCustomer:[],
    avgCookiesperHour:[],
    getcustomerPerhours:function(){
        this.customerPerhours=random(23,65)+'cookeies'
        console.log(this.customerPerhours);
        console.log(this);
    }
}
Seattle.getcustomerPerhours();


let Tokyo= {
    name: 'Tokyo',
    maxCustomer:24,
    minCusomer:3,
    averCustomer:1.2,
    customerPerhours:0,
    randomCustomer:[],
    avgCookiesperHour:[],
    getcustomerPerhours:function(){
        this.customerPerhours=random(3,24)+'cookeies'
        console.log(this.customerPerhours);
        console.log(this);
    }
}
Tokyo.getcustomerPerhours();


let Dubai= {
    name: 'Dubai',
    maxCustomer:38,
    minCusomer:11,
    averCustomer:1.2,
    customerPerhours:0,
    randomCustomer:[],
    avgCookiesperHour:[],
    getcustomerPerhours:function(){
        this.customerPerhours=random(11,38)+'cookeies'
        console.log(this.customerPerhours);
        console.log(this);
    }
}
Dubai.getcustomerPerhours();


let Paris= {
    name: 'Paris',
    maxCustomer:38,
    minCusomer:20,
    averCustomer:1.2,
    customerPerhours:0,
    randomCustomer:[],
    avgCookiesperHour:[],
    getcustomerPerhours:function(){
        this.customerPerhours=random(20,38)+'cookeies'
        console.log(this.customerPerhours);
        console.log(this);
    }
}
Paris.getcustomerPerhours();

let Lima= {
    name: 'Lima',
    maxCustomer:16,
    minCusomer:2,
    averCustomer:1.2,
    customerPerhours:0,
    randomCustomer:[],
    avgCookiesperHour:[],
    getcustomerPerhours:function(){
        this.customerPerhours=random(2,16)+'cookeies'
        console.log(this.customerPerhours);
        console.log(this);
    }
}
Lima.getcustomerPerhours();
function random(min, max) {
    return Math.floor(Math.random() * (max - min +1))+min;
}
 