"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";





export default function SignUpPage() {
    const router = useRouter();
    const [company, setCompany] = React.useState({
        name: "",
        email: "",
        password: ""
    })

    const onSignUp = async () => {

        try {

            const response = await axios.post("/api/companies/signup", company);
            console.log("Registration is successful", response.data)
            router.push("/login");
            
        } catch (error: any) {
            console.log("Registration failed", error.message)
            toast.error(error.message);
            
        }

    }

    


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>SignUp</h1>
            <hr />
            <hr />
            <hr />
            <hr />
            <label htmlFor="name">Company Name</label>
            <input
            className="p2 border border-gray-300 rounded-log mb-4 focus:outline-none text-black"
              id="name"
              type="text"
              value={company.name}
              onChange={(e) => setCompany({...company, name: e.target.value})}
              />
              <hr />
            <label htmlFor="email">Email</label>
            <input
            className="p2 border border-gray-300 rounded-log mb-4 focus:outline-none text-black"
              id="email"
              type="text"
              value={company.email}
              onChange={(e) => setCompany({...company, email: e.target.value})}
              />
              <hr />
            <label htmlFor="password">Password</label>
            <input
            className="p2 border border-gray-300 rounded-log mb-4 focus:outline-none text-black"
              id="password"
              type="password"
              value={company.password}
              onChange={(e) => setCompany({...company, password: e.target.value})}
              />
              <hr />
              <hr />
              <button
              onClick={onSignUp}
              className="p2 border border-gray-300 rounded-log mb-4 focus:outline-none">Create Account</button>
              <Link href="/login">Already have an account? Login </Link>

        </div>
    )


}