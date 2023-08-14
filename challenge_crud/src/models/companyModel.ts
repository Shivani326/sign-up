import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide the company name"],
        unique: true
    },
    email_domain: {
        type: String,
        required:[true, "Please provide an Email domain!"],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    capacity:{
        type: Number,
        required:true
    },
    challenges_type:{
        type: String,

    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verifyToken: String,
    verifyTokenExpiry: Date
})

const Company = mongoose.models.companies || mongoose.model
("companies", companySchema);

export default Company;