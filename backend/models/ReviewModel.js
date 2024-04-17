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

const ReviewSchema = mongoose.Schema({
  Firstname: { type: String, required: true },
  Lastname: { type: String, required: true },
  Mobile: { type: Number, required: true },
  email: { type: String, required: true },
  Message: { type: String, required: true },
});

const ReviewsModel = mongoose.model("Reviews", ReviewSchema);

export default ReviewsModel;
