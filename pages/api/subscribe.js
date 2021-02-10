export default async (req, res) => {
  const email = "media@styng.social";

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIP_API_KEY;
    const DATACENTER = "us7";

    // const base64APIKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");

    const url = `https://us7.api.mailchimp.com/3.0/lists/a24eeb3098/members`;

    const data = {
      email_address: email,
      status: "subscribed",
    };
    const response = await fetch(url, {
      body: JSON.stringify(data),
      headers: {
        Authorization: `apikey da3fdde3b45023d13e0ad5c9563c122b-us7`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    if (response.status >= 400) {
      return res.status(400).json({
        subscribed: `There was an error subscribing to the newsletter. Email Styng Social at ben@styng.social and we'll add you to the list.`,
        status: response.status,
        text: response.statusText,
        trailer: response.trailer,
        type: response.type,
        url: response.url,
      });
    }
    return res
      .status(201)
      .json({ subscribed: `${email} has subscribed to the Styng newsletter` });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
