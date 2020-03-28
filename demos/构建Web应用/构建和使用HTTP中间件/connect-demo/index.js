const connect=require("connect");
const replyText=require("./reply_text");
const app=connect();
app.use()
// app.user(connect.static())
app.use(replyText("Hello node"))
app.listen(8080);
