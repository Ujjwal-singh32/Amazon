import mongoose from 'mongoose';

const VarietySchema = new mongoose.Schema({
  name: String,           // e.g., "1kg Pack", "500g", etc.
  price: Number,          // price specific to this variety
  stock: Number,          // inventory count
  unit: String            // optional: "kg", "litre", etc.
}, { _id: false });

const ProductSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true }, 
  name: { type: String, required: true },
  description: { type: String, required: true },
  isOrganic: { type: Boolean, default: false },
  tags: [String],              // e.g., ["vegetable", "leafy", "low-calorie"]
  images: [String],            // URLs to image assets
  variety: [VarietySchema],    // multiple weights/sizes with different pricing
  details: [String],           // array of strings for extra info
  basePrice: { type: Number, required: true }, // used if no variety is selected

  // Sustainability Info
  sustainableScore: { type: Number, default: 0 },    // score out of 100
  energyUsed: { type: Number, default: 0 },          // in kWh or MJ
  emissions: { type: Number, default: 0 },           // in kg CO2
  greenPoints: { type: Number, default: 0 },         // points awarded on purchase
  waterSaved: { type: Number, default: 0 },          // in liters
  plasticAvoided: { type: Number, default: 0 },      // in kg or grams

  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
