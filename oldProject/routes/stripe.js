const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

router.post("/", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1K6DCRBOIDhs7bSKKSeZnNAS",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.DOMAIN}/?success=true`,
    cancel_url: `${process.env.DOMAIN}/?canceled=true`,
  });

  res.redirect(303, session.url);
});

module.exports = router;