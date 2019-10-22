const discord = require("discord.js");
const client = new discord.Client();
require('dotenv').config();

// robot registers with Discord
client.login(process.env.BOT_TOKEN);

// global vars
var punsInWaiting = [];
var approvedPuns = [];

// Functionality of bot
client.on("message", msg => {
    // Break down message into command and options
    let messSplitRegEx = /(.*)*(".*")*/;
    let commandSplit = messSplitRegEx.exec(msg);

    if(commandSplit && commandSplit[1]){
        let command = messSplitRegEx.exec(msg)[1];

        // Strip out unecessary chars
        command = command.substring(1, command.length);

        // Have bot pick a random pun from an existing database, and display it
        if(command == "gimme pun"){
            msg.reply("User has requested a pun");
        }else if(command == "add"){
            let message = message.substring(1, message.length - 1);

            // Command will add a new pun from message

        }else if(command == "puns in waiting"){
            // Here is where users will see all puns that are waiting to be added to list, and their vote count
        }else if(command == "vote"){
            // Command will have number representing the index of pun in punsInWaiting arr

            // Bot will check if user has already voted for specified pun. If so, tell user that they've already voted for it
            // If user hasn't voted for pun yet, increment that pun's vote, and add user to voted list for that pun. Then, we
            // will alert channel for new vote
        }else{
            msg.reply("command not recognize internal");
        }
    }else{
        msg.reply("command not recognized external");
    }
});