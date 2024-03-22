import { HttpConnection } from "@meshtastic/js";

const connection = new HttpConnection();

const connect = (): void => {
    void connection.connect({
        address: "10.0.0.10",
        fetchInterval: 3000
    });
};

connect();

// listen for events, process events to db.