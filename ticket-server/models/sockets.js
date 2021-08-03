const TicketList = require("./ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;

    // crear la instancia de nuevo ticketList
    this.ticketList = new TicketList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      socket.on("solicitar-ticket", (data, callback) => {
        const nuevoTicket = this.ticketList.crearTicket();
        callback(nuevoTicket);
      });

      socket.on("siguiente-ticket-trabajar", ({ agente, escritorio }, callback) => {
          const suTicket = this.ticketList.asignarTicket(agente, escritorio);
          callback(suTicket);
        }
      );
      
    });
  }
}

module.exports = Sockets;
