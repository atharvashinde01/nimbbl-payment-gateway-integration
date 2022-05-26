import React from "react";
import "./App.css";

function loadNimbblScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const DevKey = document.domain === "localhost";

function App() {
  async function displayNimbblPage() {
    const res = await loadNimbblScript(
      "https://uatapi.nimbbl.tech/static/assets/js/checkout.js"
    );

    if (!res) {
      alert("Failed to load");
      return;
    }

    const options = {
      access_key: DevKey ? "access_key_x1DveRbWzVmWW3KB" : "Real Key",
      total_amount: "100",
      currency: "INR",
      first_name: "Atharva",
      order_id: "order_id",
      image_url:
        "https://nimbbl.biz/blog/wp-content/uploads/2022/02/Logos-1.png",
      callback_handler: function (response) {
        document.getElementById("nimbbl_transaction_id").value =
          response.nimbbl_transaction_id;
        document.getElementById("nimbbl_signature").value =
          response.nimbbl_signature;
        document.nimbblpayform.submit();
      },
      custom: {
        key_1: "val_1",
        key_2: "val_2",
      },
    };

    const nimbblPaymentObject = new window.NimbblCheckout(options);
    nimbblPaymentObject.open();
  }

  return (
    <div className="app">
      <img
        className="nimbblLogo"
        src="https://forum.rhymezone.com/core/avatars/0/0/0/3/0/3/avatar13290_1.jpg"
        alt="logo"
      />
      <p className="nimbblText">Click on the button below for payment</p>
      <button
        className="nimbblPaymentButton"
        id="nimbbl_button"
        onClick={displayNimbblPage}
        target="_blank"
      >
        Pay with Nimbbl
      </button>
    </div>
  );
}

export default App;
