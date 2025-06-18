# ♻️ Theme: Sustainable Shopping Experience

**Amazon HackOn-S5 | Team CLUE CREW — NIT Jamshedpur**

---

## 1. 🚩 Problem Statement
Eco-conscious shoppers face real barriers:
- Scattered sustainable options across platforms
- Lack of trust due to greenwashing and unclear certifications
- Wasteful, fragmented deliveries
- No control over packaging choices

---

## 2. 💡 Solution Overview
We developed a one-stop, AI-powered, community-driven platform for sustainable shopping. where in we:
- Centralized verified eco-friendly products
- Offered transparent eco-grading and impact stats
- Enabled group buying and eco-packaging selection
- Gamified green choices with rewards and dashboards

---

## 3. 🌟 Key Features (In-Depth)
### AI-Driven Discovery
- Personalized product recommendations based on user profile and purchase history
- Smart search and filter for green/organic products
- Eco-scores and badges for verified sustainable products

### Green Store
- Dedicated GreenKart section for only organic/eco-friendly products
- Each product displays sustainability metrics: carbon saved, water saved, plastic avoided, green points
- Dynamic badges and eco-grades (A–E) on product cards

### Smart Cart & Eco-Checkout
- Add/remove/update items, quantity management
- Choose between Minimalist, Compostable, or Reusable packaging at checkout
- Group order option to consolidate deliveries and reduce emissions
- Real-time calculation of carbon savings and green points

### Impact Dashboard
- User dashboard with graphs for:
  - Carbon saved
  - Water saved
  - Plastic avoided
  - Green points earned
- Monthly and cumulative stats

### Rewards & Gamification
- Earn green points for every sustainable action (eco-purchase, group order, eco-packaging)
- Redeem points for eco-friendly rewards (e.g., bamboo cutlery, solar power bank)
- Leaderboards and badges for top contributors

### Admin/Product Management
- Add new products with detailed sustainability metrics and images
- Dynamic product variety, pricing, and stock management

---

## 4. 🛒 User Journey (Step-by-Step)
1. **Discover:**
   - AI suggests eco-products based on your profile
   - Browse GreenKart for verified sustainable options
2. **Shop:**
   - Add products to cart
   - Choose packaging (Minimalist, Compostable, Reusable)
   - Option to join group orders for carbon savings
3. **Checkout:**
   - See real-time impact stats (carbon, water, plastic, green points)
   - Select payment method (Razorpay, COD)
4. **Track:**
   - View order history and status
   - Access personal impact dashboard
5. **Engage:**
   - Redeem green points for rewards
   - Compete on leaderboards
   - Invite friends and build local eco-communities

---

## 5. 📊 Impact & Metrics (Futuristic)
- 🚚 45% less CO₂ in last-mile delivery (group buying)
- ♻ 2kg plastic saved per user/month (eco-packaging)
- 📈 2.5x more eco-decisions (impact tracking & rewards)
- 🤝 Green communities formed, not just transactions

---

## 6. 🏗️ Tech Stack & Architecture
- **Frontend:** Next.js 15, React 19, Tailwind CSS, Recharts, Lottie
- **Backend:** Next.js API Routes, Node.js, MongoDB (Mongoose)
- **Auth:** Clerk
- **Payments:** Razorpay
- **Media:** Cloudinary
- **Other:** Lucide/Heroicons, React Context API, Toastify

### Folder Structure
```
public/         # Images & static assets
src/
  app/          # Next.js app directory (pages, routes)
  components/   # Reusable UI components (Navbar, ProductCard, etc.)
  context/      # React Context providers (cart, products)
  lib/          # Utility libraries (DB, helpers)
  models/       # Mongoose models (User, Product, Order)
  assets/       # App-specific images/icons
```

### Data Models
- **User:**
  - Basic info, address, prime status, trust badges
  - Sustainability stats: carbon, water, plastic, points (monthly & total)
- **Product:**
  - Name, description, tags, images, varieties, price
  - Sustainability metrics: sustainableScore, energyUsed, emissions, greenPoints, waterSaved, plasticAvoided
- **Order:**
  - User, items, total, payment & order status, shipping address, delivery option, packaging points, placedAt

### Key Components
- **Navbar/GreenNavbar:** Navigation, search, user menu
- **ProductCard/ProductSlider:** Product display with eco-badges
- **Cart/Checkout:** Cart management, packaging selection, group order
- **Profile:** Impact dashboard, stats charts
- **Rewards:** Redeem green points for eco-products

---

## 7. 🖼️ Screenshots
| Home Page | GreenKart Dashboard | Rewards |
|-----------|--------------------|---------|
| ![Home](Image.jpg) | ![Dashboard](Image.jpg) | ![Rewards](Image.jpg) |

---

## 8. 🚀 Towards Scalibility
- **Marketplace Expansion:** Electronics, fashion, home goods, and more
- **Smarter AI:** Multilingual, context-aware, always learning
- **Carbon Offsetting:** Real-time tracking and offset at checkout
- **Bigger Community:** More group features, social impact, and advocacy tools

---

## 9. 👥 Team & Acknowledgements
**Team CLUE CREW:**
- Aditya Tiwari
- Rohit Ratnam
- Ujjwal Singh
- Aditya Kumar

---

## 10. 🌍 Join the Movement
Empowering users to shop smart, green, and together.  
Let’s make sustainability the easiest—and most rewarding—choice.

> _"Every green purchase plants a better future."_