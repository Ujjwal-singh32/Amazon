import mongoose from 'mongoose';

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
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed', 'returned'], default: 'pending' },
  orderStatus: { type: String, enum: ['placed', 'shipped', 'delivered', 'cancelled'], default: 'placed' },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
  },
  deliveryOption: {
    type: String,
    enum: ['individual', 'group'],
    default: 'individual', // optional: default can be set
  },
  packagingPoints: {
    type: Number,
    default: 0,
  },
  placedAt: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);
export default Order;