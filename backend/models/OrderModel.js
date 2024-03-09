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

const orderSchema = mongoose.Schema({
  CustomerFirstname: { type: String, required: true },
  CustomerLastname: { type: String, required: true },
  CustomerMobile: { type: Number, required: true },
  Product_name: { type: String, required: true },
  Product_price: { type: Number, required: true },
  Quantity: { type: Number, required: true },
  TotalPriceWithTax: { type: Number, required: true },
  Date: { type: Date, default: new Date() },
  CurrentDate: { type: Date, default: new Date(), required: true },
  Time: { type: String },
  DeliveryType: {
    type: String,
    enum: ["Online Delivery", "Pick up order"],
    required: true,
  },
  PaymentBy: {
    type: String,
    enum: ["Credit Card", "Debit Card", "Cash on delivery"],
    required: true,
  },
  CustomerId: {
    type: mongoose.Types.ObjectId,
    ref: "CustomerModel",
    require: true,
  },
});

const OrderModel = mongoose.model("Orders", orderSchema);

export default OrderModel;
