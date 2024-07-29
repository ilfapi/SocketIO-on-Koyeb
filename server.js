const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 2024;

app.get("/", function (req, res) {
    res.status(200).send(`API is built by ILF Football</br>`);
});

io.on("connection", (socket) => {
    console.log("Client connected");
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });

    socket.on("message", (msg) => {
        io.emit("message", msg);
    });
});

app.listen(port, () => {
    // http.listen(port, () => {
        console.log(`App listening on port ${port}`);
    // });
});
