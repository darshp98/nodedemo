
//pulling in our twit package we installed
var Twit = require("twit");

var config = require('./config.js');
//constructor for the twit object
var T = new Twit(config);

//call first time
botTweet();

//callback, milliseconds bw each tweet
setInterval(botTweet, 60 * 5 * 1000); //5 min

function botTweet() {

}

//route(what are we doing), key:value pair, callback
//post is type of request
T.post('statuses/update', { status: "Hello! I'm tweeting from code :)" }, tweeted);

//let's us know if everything works
function tweeted(error, data, response) {
    if (error) {
        console.log(error);
    } else {
        console.log("Yay!" + data.text);
    }
}
