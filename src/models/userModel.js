import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    // Basic Info
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,

    address: [{
        street: String,
        city: String,
        state: String,
        country: String,
        pincode: String,
    }],

    // Account Details
    isPrimeMember: { type: Boolean, default: false },
    memberSince: { type: Date, default: Date.now },
    ordersPlaced: { type: Number, default: 0 },

    // Badges and Trust
    isTrustedReviewer: { type: Boolean, default: false },

    // GreenKart Metrics
    greenStats: {
        emissionsSavedKg: { type: Number, default: 0 },         
        plasticsAvoidedKg: { type: Number, default: 0 },        
        greenPoints: { type: Number, default: 0 },              
        waterSavedLiters: { type: Number, default: 0 },         
        ecoPackages: { type: Number, default: 0 },             
        groupedOrders: { type: Number, default: 0 },            
        forestAreaSavedSqM: { type: Number, default: 0 },      
        monthlyCarbonData: [
            {
                month: String,     // e.g. "Jan"
                co2: Number,       // e.g. 3
            }
        ],
        monthlyPointsData: [
            {
                month: String,     // e.g. "Jan"
                points: Number,    // e.g. 45
            }
        ]
    },

    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
