// Import mongoose
import mongoose from 'mongoose';

// Create a schema
const faultSchema = new mongoose.Schema({
  phase: { type:String},
  distance : {type : Number},
 
});

// Create a model based on the schema
const Fault = mongoose.model('Fault', faultSchema);

// Export the model for use in other parts of your application
export default Fault;
