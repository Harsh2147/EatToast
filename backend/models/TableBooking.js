import mongoose from "mongoose";


const uri =
"mongodb+srv://capstone:Conestoga@cluster0.nhgxcfa.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      "=============================== BOOKING Connected to Mongodb Successfully !!!============================="
    );
  })
  .catch((err) => {
    console.log(
      `######### not Connected due to the error below ##########\n${err}`
    );
  });

  const TableBookingSchema = mongoose.Schema({
    tableName: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    capacity: {
      type: String,
      required: true
    },
    available: {
      type: Boolean,
      required: true
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    phonenumber: {
      type: Number,
    },
    email: {
      type: String,
    },

  });

const tableModel = mongoose.model("TableBooking", TableBookingSchema);

export default tableModel;
