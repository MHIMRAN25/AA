const fs = require("fs");
module.exports.config = {
    name: "salam",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: false, 
  category: "kawsar", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("আসসালামু আলাইকুম ওয়া রহমাতুল্লাহ") ||
react.includes("salamer uttor") ||
 react.includes("السلام عليكم") || 
react.includes("السلام") || react.includes("असलमु अलैकुम") || react.includes("assalamu alaykum ") || react.includes("assalamu alaikum") ||
react.includes("সালামের উত্তর") ||  
react.includes("アッサラーム・アライクム") ||
react.includes("아살라무 알라이쿰") ||
react.includes("আসসালামু আলাইকুম") ||
react.includes("salamer uttor") ||
react.includes("평화가 당신에게 있기를.") || 
react.includes("तिमीमाथि शान्ति रहोस्।") || 
react.includes("असलमु अलैकुम") || 
react.includes("assalamu alaykum ") || 
react.includes("assalamualaikum") ||
react.includes("সালামের জবাব") ||  
react.includes("ਅਸਾਲਮੂ ਅਲੈਕੁਮ") ||
react.includes("সঠিক সালামের উত্তর") ||
react.includes("阿萨拉穆·阿拉库姆")) {
		var msg = {
				body: "~ وعليكم السلام و الرحمة وبركاته🥰!!"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

     }
