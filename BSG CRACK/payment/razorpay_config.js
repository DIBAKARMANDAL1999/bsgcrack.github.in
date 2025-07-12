// razorpay_config.js

export const razorpayOptions = {
  key: "rzp_test_yourkey123", // Replace with your Razorpay Key
  currency: "INR",
  name: "BSG Crack",
  description: "Monthly Subscription",
  image: "https://yourdomain.com/logo.png",
  theme: {
    color: "#3399cc"
  }
};

export function openRazorpayCheckout(amountInRupees) {
  const options = {
    ...razorpayOptions,
    amount: amountInRupees * 100, // Convert to paise
    handler: function(response) {
      alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
    }
  };
  
  const rzp = new Razorpay(options);
  rzp.open();
}