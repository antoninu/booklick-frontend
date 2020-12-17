import fetch from "isomorphic-unfetch";

import auth0 from "../../lib/auth0";
import config from "../../lib/config";

export default async function content(req, res) {
  try {
    const tokenCache = auth0.tokenCache(req, res);
    const { accessToken } = await tokenCache.getAccessToken({});

    const url = config.API_BASE_URL;
    console.log(url);
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const content = await response.json();

    var crypto = require("crypto");
    //const utf8 = require("utf8");

    var secret = "PYPd1Hv4J6A";
    //var message = "1515928475.417";

    var hmac = crypto.createHmac("sha512", secret);

    var jsonContent = JSON.stringify(content);
    console.log(jsonContent);

    var hmac_result = hmac
      .update(jsonContent)
      //.update(message)
      .digest("base64");

    let api_signature = response.headers.get("signature");
    console.log("hmac result: " + hmac_result);
    console.log("api signature: " + api_signature);
    if (hmac_result !== api_signature) {
      console.log("Integrity error!");
    }

    res.status(200).json(content);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
}
