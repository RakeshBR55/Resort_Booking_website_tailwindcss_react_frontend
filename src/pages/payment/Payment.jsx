import React from "react";

const token = localStorage.getItem("token"); //Token for user Auth
const __DEV__ = document.domain === "localhost";

//Payment details
const amount = 900;

const Payment = () => {
  async function displayRazorpay() {
    const data = await fetch("http://127.0.0.1:8800/payment", {
      method: "POST",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(amount),
    }).then((t) => t.json());

    const options = {
      key: __DEV__ ? process.env.RAZOR_PAY_ID : "PRODUCTION_KEY",
      amount: data.amount.toString(),
      currency: data.currency,
      name: "Resort Booking",
      description: "Thank you for nothing. Please give us some money",
      order_id: data.id,

      //Handler function for payment verification
      handler: async function (response) {
        console.log(response);
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razropayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        //Payment Verification
        const verify = await fetch("http://127.0.0.1:8800/verification", {
          method: "POST",
          headers: {
            "x-access-token": token,
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const res = await verify.json();
        if (res.status === "ok") {
          alert("Payment Successful");
        } else {
          alert("payment failed");
        }
      },
      //Prefill for Payment form
      prefill: {
        name: "Abhishek Bhat",
        email: "abhi@gmail.com",
        phone_number: "9113021966",
      },
    };

    //Creating razorpay window
    const razorPay = new window.Razorpay(options);
    razorPay.open();
  }

  return (
    <div>
      <h1>Amount:5000</h1>
      {/* Do touch the code below */}
      <button
        className="App-link cursor-pointer"
        onClick={displayRazorpay}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Now
      </button>
      {/* Don't Touch the code above */}
    </div>
  );
};

export default Payment;
