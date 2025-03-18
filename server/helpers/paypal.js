const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AXltZCLiNZxcCtbX9fhKdHV2vFF6CqaKDKpm5I6z6qT2oA9XMQ8UdsN4_tcgH2gOusPhgWSRbxqP1Zx5",
  client_secret:
    "EMnXRZnKrNxXtWGUsiIRX1hbd0TA3MPy4eolWLh-LJD-H7tZUngXovOvFWCKZ7y2EVadAMQsxARBGWdL",
});

module.exports = paypal;
