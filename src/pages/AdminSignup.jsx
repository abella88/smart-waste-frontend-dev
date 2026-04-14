import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import InputField from "../components/ui/InputField";
import Card from "../components/ui/Card";
import "../styles/AdminSignup.css";

const AdminSignup = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    adminCode: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Required";
    if (!form.email.trim()) newErrors.email = "Required";
    if (!form.password) newErrors.password = "Required";
    if (form.password.length < 6) newErrors.password = "Minimum 6 characters";

    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (form.adminCode !== "ADMIN123")
      newErrors.adminCode = "Invalid admin code";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log("Admin Registered:", form);

    // Redirect to admin login
    navigate("/");
  };

  return (
    <div className="admin-signup-container">
      <Card>
        <h1 className="admin-signup-title">Admin Registration</h1>
        <p className="admin-signup-description">
          Create an admin account to manage the system
        </p>

        <form onSubmit={handleSubmit} className="admin-signup-form">
          <InputField
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter full name"
            value={form.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />

          <InputField
            label="Admin Email"
            name="email"
            type="email"
            placeholder="Enter admin email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          <InputField
            label="Admin Code"
            name="adminCode"
            type="text"
            placeholder="Enter admin access code"
            value={form.adminCode}
            onChange={handleChange}
            error={errors.adminCode}
          />

          <Button type="submit" text="Register as Admin" />

          <p className="admin-signup-footer">
            Already an admin?{" "}
            <span className="admin-link" onClick={() => navigate("/")}>
              Login
            </span>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default AdminSignup;
