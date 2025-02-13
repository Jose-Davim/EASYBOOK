const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  comment: String,
  rating: { type: Number, required: true }
});

ReviewSchema.post("save", async function () {
  const reviews = await this.model("Review").find({ serviceId: this.serviceId });
  const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  await this.model("Service").findByIdAndUpdate(this.serviceId, { ratings: avgRating });
});

module.exports = mongoose.model("Review", ReviewSchema);