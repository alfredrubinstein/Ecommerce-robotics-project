import mongoose from "mongoose";

const robotSchema = new mongoose.Schema({
   image: {
      type: String,
      required: true,
   },
   slug: {
      type: String,
      required: true,
      unique: true
   },
   title: {
      type: String,
      required: true,
   },
   //arreglar hacer que instructions, sea un array o un objeto
   instructions: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },
   links: {
      type: Array,
      required: true,
   },

});


export const RobotModel = mongoose.models.Robot || mongoose.model('Robot', robotSchema);
//revisar si cambiar aqui a robots1
