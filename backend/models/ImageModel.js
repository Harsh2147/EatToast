import mongoose from "mongoose";

//"mongodb+srv://capstone:Conestoga@cluster0.nhgxcfa.mongodb.net/?retryWrites=true&w=majority";
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

const ImageSchema = mongoose.Schema({
  url: {
    type: String,
    required: true
  }
});

// Create the image model using the schema
const imageaxiosModel = mongoose.model("Image", ImageSchema);

export default imageaxiosModel;
