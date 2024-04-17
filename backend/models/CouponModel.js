import mongoose from "mongoose";

//const uri = "mongodb+srv://test123:Conestoga@cestar-node.wzsxe.mongodb.net/car_craze?retryWrites=true&w=majority";
const uri =
  "mongodb+srv://capstone:Conestoga@cluster0.nhgxcfa.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      "===============================Connected to Mongodb Successfully !!!============================="
    );
  })
  .catch((err) => {
    console.log(
      `######### not Connected due to the error below ##########\n${err}`
    );
  });

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]{5,10}$/,
  },
  discountType: {
    type: String,
    enum: [
      "percentage",
      "fixed",
      "free_shipping",
      "bogo",
      "tiered",
      "time_based",
      "bundle",
    ],
    required: true,
  },
  discountAmount: {
    type: Number,
  },
  expiryDate: { type: Date, default: new Date() },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const CouponModel = mongoose.model("Coupon", couponSchema);

export default CouponModel;
