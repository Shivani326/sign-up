import { Schema, model, models } from "mongoose";

const CompanySchema = newSchema({
    name: {
        type: String,
        required: [true, 'Company Name is required']
    },
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: true
    }
});

const Company = models.Company || model("Company", CompanySchema);

export default Company;