const ACCESS_TOKEN = "xxx";
const bot = new LineBotSdk.client(ACCESS_TOKEN);
function doPost(e) { bot.call(e, callback) };
function callback(e) {

  if (e.message.type = "text")
  {
    var textResult = AI(e.message.text)
    bot.replyMessage(e, [bot.textMessage(textResult)]); //Reply Message
  }
};

// https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx // Url webhook
