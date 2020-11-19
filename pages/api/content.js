import fetch from "isomorphic-unfetch";

import auth0 from "../../lib/auth0";
import config from "../../lib/config";

export default async function content(req, res) {
  try {
    const tokenCache = auth0.tokenCache(req, res);
    const { accessToken } = await tokenCache.getAccessToken({});

    const url = `${config.API_BASE_URL}/getcontent`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const content = await response.json();

    var crypto = require("crypto");
    //const utf8 = require("utf8");

    var secret = "PYPd1Hv4J6";
    //var message = "1515928475.417";

    var hmac = crypto.createHmac("sha512", secret);
    var hmac_result = hmac
      .update(JSON.stringify(content))
      //.update(message)
      .digest("base64");

    let api_signature = response.headers.get("signature");
    if (hmac_result !== api_signature) {
      throw "Integrity not guaranteed!";
    }

    console.log(hmac_result);
    console.log(response.headers.get("signature"));

    res.status(200).json(content);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
}
