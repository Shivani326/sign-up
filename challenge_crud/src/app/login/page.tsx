"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";








export default function LoginPage() {
    const router = useRouter();
    const [company, setCompany] = React.useState({
        email: "",
        password: ""
    })

    const onLogin = async () => {

        try {

            const response = await axios.post("/api/companies/login", company)
            console.log("Login successful", response.data)
            router.push("/home")
            
        } catch (error: any) {
            console.log("Login failed", error.message)
            toast.error(error.message);
            
        }

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
            <hr />
            <hr />
            <hr />
            <label htmlFor="email">Email</label>
            <input
            className="p2 border border-gray-300 rounded-log mb-4 focus:outline-none"
              id="email"
              type="text"
              value={company.email}
              onChange={(e) => setCompany({...company, email: e.target.value})}
              />
              <hr />
            <label htmlFor="password">Password</label>
            <input
            className="p2 border border-gray-300 rounded-log mb-4 focus:outline-none"
              id="password"
              type="password"
              value={company.password}
              onChange={(e) => setCompany({...company, password: e.target.value})}
              />
              <hr />
              <hr />
              <button
              onClick={onLogin}
              className="p2 border border-gray-300 rounded-log mb-4 focus:outline-none">Login</button>
              <Link href="/login">New to Impactboard? SignUp </Link>

        </div>
    )


}