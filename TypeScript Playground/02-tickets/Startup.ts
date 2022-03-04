class Ticket {
    constructor(
        public destination: string,
        public price: number,
        public status: string
    ) { }
}

function manageTickets(ticketsMetadata: string[], sortingCriteria: string): Ticket[] {
    const tickets = ticketsMetadata.map((ticket) => {
        const [destination, price, status] = ticket.split('|');
        return new Ticket(destination, parseFloat(price), status);
    });

    if (sortingCriteria === 'destination') {
        return tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortingCriteria === 'price') {
        return tickets.sort((a, b) => a.price - b.price);
    } else if (sortingCriteria === 'status') {
        return tickets.sort((a, b) => a.status.localeCompare(b.status));
    }
}

console.log(manageTickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
))