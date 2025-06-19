import Product from "@/models/productModel";
import connectDB from "@/lib/db";

export default async function handler(req, res) {
  await connectDB();

  const { productId } = req.query;
  if (!productId) return res.status(400).json({ error: "productId is required" });

  try {
    const product = await Product.findOne({ productId });

    if (!product)
      return res.status(404).json({ error: "Product not found" });

    const alternatives = await Product.find({
      isOrganic: true,
      productId: { $ne: productId },
      tags: { $in: product.tags },
    })
      .sort({ sustainableScore: -1 })
      .limit(5);

    return res.status(200).json({ alternatives });
  } catch (error) {
    console.error("Error fetching green alternatives:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
