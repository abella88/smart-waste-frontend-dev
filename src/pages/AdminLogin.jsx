import React, { useState } from "react";
import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";
import Card from "../components/ui/Card";
import "../styles/AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Admin email is required";
    if (!form.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Fake admin check (for now)
    if (form.email === "admin@example.com" && form.password === "admin123") {
      navigate("/dashboard");
    } else {
      setErrors({ password: "Invalid admin credentials" });
    }
  };

  return (
    <div className="admin-login-container">
      <Card>
        <h1 className="admin-title">Admin Panel</h1>
        <p className="admin-description">
          Login to manage waste operations and system activities
        </p>

        <form onSubmit={handleSubmit} className="admin-form">
          <InputField
            label="Admin Email"
            type="email"
            name="email"
            placeholder="Enter admin email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />

          <Button type="submit" text="Login as Admin" />
        </form>
      </Card>
    </div>
  );
};

export default AdminLogin;
