import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: Number,
    required: true,
  },
  users: {
    type: Number,  // it should be array ; employee
  },
  campaigns: [
    {type: String}],
  
});

const Workspace =
  mongoose.models.Workspace || mongoose.model("workspace", workspaceSchema);

export default Workspace;