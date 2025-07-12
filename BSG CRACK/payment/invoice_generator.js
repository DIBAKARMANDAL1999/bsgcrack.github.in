// invoice_generator.js

export function generateInvoice(name, amount, transactionId) {
  const invoice = `
    Invoice for: ${name}
    ----------------------
    Amount: ₹${amount}
    Transaction ID: ${transactionId}
    Date: ${new Date().toLocaleDateString()}
    ----------------------
    Thank you for your payment!
  `;
  
  const blob = new Blob([invoice], { type: "text/plain" });
  const link = document.createElement("a");
  link.download = `${name}_invoice.txt`;
  link.href = URL.createObjectURL(blob);
  link.click();
}