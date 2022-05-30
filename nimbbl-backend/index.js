const cors = require("cors");
const express = require("express");
const uuid = require("uuid");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

var request = require("request");
var options = {
  method: "POST",
  url: "https://api.nimbbl.tech//api/v2/generate-token",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    access_key: "<access_key>",
    access_secret: "<access_secret>",
  }),
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

var request = require("request");
var options = {
  method: "POST",
  url: "https://api.nimbbl.tech/api/v2/create-order",
  headers: {
    Authorization: "Bearer <token>",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    amount_before_tax: 4,
    currency: "INR",
    invoice_id: "BrQv9nkxDEqWR3zg",
    device_user_agent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36",
    order_from_ip: "x.x.x.x",
    tax: 0,
    user: {
      mobile_number: "9999999999",
      email: "rakesh.kumar@example.com",
      first_name: "Rakesh",
      last_name: "Kumar",
    },
    shipping_address: {
      address_1: "Some address",
      street: "Your street",
      landmark: "My landmark",
      area: "My area",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400018",
      address_type: "residential",
    },
    total_amount: 4,
    order_line_items: [
      {
        referrer_platform_sku_id: "sku1",
        title: "Designer Triangles",
        description: "Wallpaper by  chenspec from Pixabay",
        quantity: 1,
        rate: 4,
        amount: 4,
        total_amount: 4,
        image_url:
          "https://cdn.pixabay.com/photo/2021/02/15/15/25/rhomboid-6018215_960_720.jpg",
      },
    ],
  }),
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

// Routes
app.get("/", (req, res) => {
  res.send("It's Working!");
});

app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log();
});

// Listen
app.listen(8282, () => console.log("Listening at port 8282"));
