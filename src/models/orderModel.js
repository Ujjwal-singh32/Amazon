const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
      priceAtPurchase: Number,
    },
  ],
  totalAmount: Number,
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed','returned'], default: 'pending' },
  orderStatus: { type: String, enum: ['placed', 'shipped', 'delivered', 'cancelled'], default: 'placed' },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
  },
  placedAt: { type: Date, default: Date.now },
});
