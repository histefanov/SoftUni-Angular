var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function manageTickets(ticketsMetadata, sortingCriteria) {
    var tickets = ticketsMetadata.map(function (ticket) {
        var _a = ticket.split('|'), destination = _a[0], price = _a[1], status = _a[2];
        return new Ticket(destination, parseFloat(price), status);
    });
    if (sortingCriteria === 'destination') {
        return tickets.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
    }
    else if (sortingCriteria === 'price') {
        return tickets.sort(function (a, b) { return a.price - b.price; });
    }
    else if (sortingCriteria === 'status') {
        return tickets.sort(function (a, b) { return a.status.localeCompare(b.status); });
    }
}
console.log(manageTickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
));
