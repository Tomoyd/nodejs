function replyText(text) {
    return function (req,response) {
        console.log(req.method)
        response.end(text)
    }
}
module.exports=replyText
