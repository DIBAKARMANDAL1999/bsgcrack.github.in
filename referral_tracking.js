// Sample referral tracking logic
const referrals = [
  { user: "user01@example.com", referredBy: "admin", earnings: 15 },
  { user: "user02@example.com", referredBy: "user01", earnings: 5 },
  { user: "user03@example.com", referredBy: "user02", earnings: 5 }
];

function displayReferrals() {
  referrals.forEach((ref, index) => {
    console.log(`${index + 1}. ${ref.user} was referred by ${ref.referredBy} - Earned ₹${ref.earnings}`);
  });
}

displayReferrals();