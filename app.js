'use strict';

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let hours = ['6 am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
    name: 'Seattle',
    maxCustomer: 65,
    minCustomer: 23,
    averCoockies: 6.3,
    customerPerhours: [],
    avgCookiesperHour: [],
    total: 0,

    // this.customerPerhours=random(23,65)+'cookeies'
    // console.log(this.customerPerhours);
    // console.log(this);


    coustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customerPerhours.push(random(this.minCustomer, this.maxCustomer));
        }

    },
    calAvgCookiesperHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.avgCookiesperHour.push(Math.floor(this.customerPerhours[i] * this.averCoockies));
            
            this.total += this.averCoockies[i];
        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);

        let h2elememnt = document.createElement('h2');
        console.log(h2elememnt);
        parent.appendChild(h2elememnt);
        h2elememnt.textContent = this.name;

        let unorderdlist = document.createElement('ul');
        parent.appendChild(unorderdlist);
        // because we need 14 li and this hours array have 14 item
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            unorderdlist.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.coustomer[i]} cookies`;

        }


        let totalElement = document.createElement('li');
        unorderdlist.appendChild(totalElement);
        totalElement.textContent= `Total : ${this.total} cookies`;


    }

}

Seattle.coustomer();
Seattle.calAvgCookiesperHour();
Seattle.render();

let Tokyo = {
    name: 'Tokyo',
    maxCustomer: 24,
    minCusomer: 3,
    averCoockies: 1.2,
    customerPerhours: 0,
    randomCustomer: [],
    avgCookiesperHour: [],
    getcustomerPerhours: function () {
        this.customerPerhours = random(3, 24) + 'cookeies'
        console.log(this.customerPerhours);
        console.log(this);
    }
}
Tokyo.getcustomerPerhours();


let Dubai = {
    name: 'Dubai',
    maxCustomer: 38,
    minCusomer: 11,
    averCoockies: 1.2,
    customerPerhours: 0,
    randomCustomer: [],
    avgCookiesperHour: [],
    getcustomerPerhours: function () {
        this.customerPerhours = random(11, 38) + 'cookeies'
        console.log(this.customerPerhours);
        console.log(this);
    }
}
Dubai.getcustomerPerhours();


let Paris = {
    name: 'Paris',
    maxCustomer: 38,
    minCusomer: 20,
    averCoockies: 1.2,
    customerPerhours: 0,
    randomCustomer: [],
    avgCookiesperHour: [],
    getcustomerPerhours: function () {
        this.customerPerhours = random(20, 38) + 'cookeies'
        console.log(this.customerPerhours);
        console.log(this);
    }
}
Paris.getcustomerPerhours();

let Lima = {
    name: 'Lima',
    maxCustomer: 16,
    minCusomer: 2,
    averCoockies: 1.2,
    customerPerhours: 0,
    randomCustomer: [],
    avgCookiesperHour: [],
    getcustomerPerhours: function () {
        this.customerPerhours = random(2, 16) + 'cookeies'
        console.log(this.customerPerhours);
        console.log(this);
    }
}
Lima.getcustomerPerhours();
