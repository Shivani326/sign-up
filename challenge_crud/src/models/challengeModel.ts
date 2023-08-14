import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    maxTeamMembers: {
        type: Number
    }
})

const Challenge = mongoose.models.challenges || mongoose.model
("challenges", challengeSchema);

export default Challenge;