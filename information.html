const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let streams = []; // قائمة البثوث الحالية
let participants = []; // قائمة المشاركين الذين يرفعون أيديهم

// تقديم صفحة الويب والملفات المدمجة
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Live Classroom</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0; padding: 0;
          background-color: #f9f9f9;
          color: #333;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        header {
          background-color: #4CAF50;
          color: white;
          padding: 15px;
          width: 100%;
          text-align: center;
        }
        #video-container {
          margin: 20px 0;
          width: 80%;
          max-width: 800px;
          border: 2px solid #4CAF50;
          padding: 10px;
          background: black;
        }
        #participants-list {
          margin: 20px;
          list-style: none;
          padding: 0;
        }
        button {
          padding: 10px 20px;
          margin: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #45a049;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Live Classroom</h1>
      </header>
      <div id="video-container">
        <p style="color:white; text-align:center;">Live Stream will appear here</p>
      </div>
      <div>
        <button id="start-stream">Start Stream</button>
        <button id="stop-stream">Stop Stream</button>
      </div>
      <div>
        <h2>Participants raising hands:</h2>
        <ul id="participants-list"></ul>
      </div>
      <script src="/socket.io/socket.io.js"></script>
      <script>
        const socket = io();

        const startStreamBtn = document.getElementById('start-stream');
        const stopStreamBtn = document.getElementById('stop-stream');
        const participantsList = document.getElementById('participants-list');

        // بدء البث
        startStreamBtn.addEventListener('click', () => {
          socket.emit('start-stream', { admin: true });
          alert('Stream started!');
        });

        // إيقاف البث
        stopStreamBtn.addEventListener('click', () => {
          socket.emit('stop-stream');
          alert('Stream stopped!');
        });

        // تحديث قائمة المشاركين
        socket.on('update-participants', (participants) => {
          participantsList.innerHTML = '';
          participants.forEach((p) => {
            const li = document.createElement('li');
            li.textContent = p.name;
            participantsList.appendChild(li);
          });
        });
      </script>
    </body>
    </html>
  `);
});

// WebSocket إدارة
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // بدء البث
  socket.on("start-stream", (data) => {
    streams.push({ id: socket.id, admin: data.admin });
    io.emit("stream-started", streams);
    console.log("Stream started by:", socket.id);
  });

  // إيقاف البث
  socket.on("stop-stream", () => {
    streams = streams.filter((s) => s.id !== socket.id);
    io.emit("stream-stopped");
    console.log("Stream stopped by:", socket.id);
  });

  // إضافة مشارك
  socket.on("raise-hand", (data) => {
    participants.push({ id: socket.id, name: data.name });
    io.emit("update-participants", participants);
    console.log(`${data.name} raised hand`);
  });

  // إزالة مشارك عند قطع الاتصال
  socket.on("disconnect", () => {
    streams = streams.filter((s) => s.id !== socket.id);
    participants = participants.filter((p) => p.id !== socket.id);
    io.emit("update-participants", participants);
    console.log(`User disconnected: ${socket.id}`);
  });
});

// تشغيل الخادم
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});