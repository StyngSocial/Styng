export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = "us7";

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    const data = {
      email_address: email,
      status: "subscribed",
    };
    const response = await fetch(url, {
      body: JSON.stringify(data),
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    if (response.status >= 400) {
      return res.status(400).json({
        subscribed: `There was an error subscribing to the newsletter. Email Styng Social at ben@styng.social and we'll add you to the list.`,
        url: `${url}`,
        api_key: `${API_KEY}`,
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
