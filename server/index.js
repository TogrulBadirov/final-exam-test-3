import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(cors())
app.use(express.json())
const port = 3000;
const connectionUrl =
  "mongodb+srv://togrul321:mPTi1uWck0vzXeXf@firstcluster.udpwqcz.mongodb.net/";
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  image: String,
  title: String,
  detail: String,
});

const Services = mongoose.model("MyServices1", ServiceSchema);

app.get("/", async (req, res) => {
  const allServices = await Services.find({});
  res.send(allServices);
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
  const Service = await Services.findById(id);
  res.send(Service);
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  try {
    const newService = new Services(req.body);
  await newService.save();
  res.send("Product Created!");
  } catch (error) {
   console.log(error); 
  }
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const service = await Services.findByIdAndDelete(id)
  res.send("Product Deleted!");
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose.connect(connectionUrl).then(() => console.log("Connected!"));
