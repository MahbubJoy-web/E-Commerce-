const invoiceTemplate = (
  customerName,
  customerPhone,
  address,
  orderId,
  items,
  orderDate,
  subtotal,
  cuponCode = "N/A",
  shippingCost = 0,
  total = 0,
  paymentStatus = "Paid"
) => {

  const currentYear = new Date().getFullYear();

  // Dynamically render items in HTML table with image
  const itemsRows = items.productItems
    .map(
      (item) => `
      <tr>
        <td>
          <img src="${item.productId.thumnailImage}" alt="${item.productId.productTitle}" style="width:50px;height:50px;object-fit:cover;border-radius:4px;vertical-align:middle;margin-right:10px;">
          ${item.productId.productTitle}
        </td>
        <td>${item.qty}</td>
        <td>BDT ${item.productId.discountPrice}</td>
        <td>BDT ${(item.productId.discountPrice * item.qty)}</td>
      </tr>
      `
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Invoice - Force Coder</title>
  <style>
    body {
      margin: 0;
      font-family: 'Poppins', Arial, sans-serif;
      background-color: #f6f6f8;
      color: #333;
    }
    .invoice-container {
      max-width: 700px;
      margin: 40px auto;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }
    .invoice-header {
      background: linear-gradient(135deg, #FF9D00, #ffb84d);
      padding: 25px 30px;
      color: #fff;
      text-align: center;
    }
    .invoice-header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: 1px;
    }
    .invoice-header p {
      margin: 8px 0 0;
      font-size: 14px;
    }
    .invoice-body {
      padding: 30px;
    }
    .invoice-info {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 25px;
    }
    .invoice-info td {
      width: 50%;
      vertical-align: top;
      padding: 10px;
      font-size: 14px;
      color: #555;
    }
    .invoice-info h3 {
      color: #FF9D00;
      margin: 0 0 8px;
      font-size: 16px;
    }
    .items-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    .items-table th, .items-table td {
      border: 1px solid #eee;
      padding: 12px;
      text-align: left;
      font-size: 14px;
      vertical-align: middle;
    }
    .items-table th {
      background-color: #fff5e6;
      color: #FF9D00;
      font-weight: 600;
    }
    .items-table td {
      color: #555;
    }
    .total-section {
      margin-top: 25px;
      text-align: right;
    }
    .total-section p {
      margin: 5px 0;
      font-size: 15px;
    }
    .grand-total {
      font-size: 18px;
      font-weight: 700;
      color: #FF9D00;
    }
    .payment-status {
      margin-top: 25px;
      padding: 12px 15px;
      background-color: #fff5e6;
      border-left: 5px solid #FF9D00;
      font-size: 14px;
      font-weight: 500;
      color: #444;
    }
    .footer {
      background-color: #fafafa;
      padding: 15px;
      text-align: center;
      font-size: 13px;
      color: #777;
      border-top: 1px solid #eee;
    }
    .footer a {
      color: #FF9D00;
      text-decoration: none;
    }
    @media (max-width: 600px) {
      .invoice-body {
        padding: 20px;
      }
      .invoice-info td {
        display: block;
        width: 100%;
        margin-bottom: 15px;
      }
      .items-table td img {
        width: 40px;
        height: 40px;
        margin-right: 5px;
      }
    }
  </style>
</head>
<body>
  <div class="invoice-container">
    <div class="invoice-header">
      <h1>INVOICE</h1>
      <p>Thank you for shopping with Force Coder</p>
    </div>

    <div class="invoice-body">
      <table class="invoice-info">
        <tr>
          <td>
            <h3>Invoice To:</h3>
            <p><strong>${customerName}</strong><br>
            <a href="tel:${customerPhone}" style="color:#0073e6;text-decoration:none;">${customerPhone}</a><br>
            ${address}</p>
          </td>
          <td>
            <h3>Invoice Details:</h3>
            <p>Order ID: <strong>#${orderId}</strong><br>
            Date: <strong>${orderDate}</strong><br>
            (Bangladesh Standard Time)</p>
          </td>
        </tr>
      </table>

      <table class="items-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
           ${itemsRows}
        </tbody>
      </table>

      <div class="total-section">
        <p>Subtotal: BDT ${subtotal}</p>
        <p>Coupon: ${cuponCode}</p>
        <p>Shipping: BDT ${shippingCost}</p>
        <p class="grand-total">Grand Total: BDT ${total}</p>
      </div>

      <div class="payment-status">
        Payment Status: <strong>Cash On Delivery</strong>
      </div>
    </div>

    <div class="footer">
      <p>Need help? <a href="mailto:mahbubhasan1322@h,ail.com.com">Contact Support</a></p>
      <p>&copy; MERN E-commarce From Force Coder. All Rights Reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
};

module.exports = invoiceTemplate;
