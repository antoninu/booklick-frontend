var crypto = require("crypto");

var secret = "PYPd1Hv4J6";
var message = "1515928475.417";

var hmac = crypto.createHmac("sha512", secret);
var hmac_result = hmac.update(message).digest("base64");
console.log(hmac_result);
