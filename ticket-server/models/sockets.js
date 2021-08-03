const TicketList = require('./ticket-list');

class Sockets {

    constructor( io ) {

        this.io = io;

        // crear la instancia de nuevo ticketList
        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            socket.on('solicitar-ticket', (data, callback) => {
                const nuevoTicket = this.ticketList.crearTicket();
                callback(nuevoTicket);
            })
        });
    }


}


module.exports = Sockets;