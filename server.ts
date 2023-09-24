const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    allowedHeaders: ["x-api-key", "Content-Type", "Authorization"],
  })
);
app.get("/events", (req: any, res: any) => {
  res.writeHead(200, {
    "Content-type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
  });
  setInterval(() => {
    const data = { message: new Date().toISOString() };
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 2000);
});
app.listen(3000, () => console.log("Server is listening on port 3000"));
