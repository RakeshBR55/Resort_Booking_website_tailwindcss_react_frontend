import React from "react";

function loadScript(src) {
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

const __DEV__ = document.domain === "localhost";

const Payment = () => {
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://127.0.0.1:8800/payment", {
      method: "POST",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? process.env.RAZOR_PAY_ID : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Resort Booking",
      description: "Thank you for nothing. Please give us some money",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Abhishek Bhat",
        email: "abhi@gmail.com",
        phone_number: "9113021966",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div>
      <h1>Amount:5000</h1>
      {/* Do touch the code below */}
      <a
        className="App-link cursor-pointer"
        onClick={displayRazorpay}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now
      </a>
      {/* Don't Touch the code above */}
    </div>
  );
};

export default Payment;
