import React, { useState } from "react";

export default function Signup() {
  const [registerInfo, setRegisterInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [registerMessage, setRegisterMessage] = useState({ type: "", msg: "" });

  function validateEmail(email) {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function change(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setError("Invalid Email");
      } else {
        setError("");
      }
      setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
    } else if (e.target.name === "firstName") {
      if (!e.target.value.length) {
        setError(`${e.target.name} is required`);
      } else {
        setError("");
      }
      setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
    } else if (e.target.name === "lastName") {
      if (!e.target.value.length) {
        setError(`${e.target.name} is required`);
      } else {
        setError("");
      }
      setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
    } else {
      if (!e.target.value.length) {
        setError(`${e.target.name} is required`);
      } else {
        setError("");
      }
      setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
    }

    // if (!error) {
    //   setRegisterInfo({ ...registerInfo, [e.target.name]: [e.target.value] });
    // }
  }

  const submitRegister = async (e) => {
    e.preventDefault();
    setRegisterMessage({ type: "", msg: "" });
    const verify = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerInfo),
    });
    const verifyRegister = await verify.json();

    if (verifyRegister === "success") {
      Cookie.set("auth-token", verifyRegister.token);
      setRegisterMessage({
        type: "success",
        message: "Register successful! Welcome back! 😊",
      });
    } else {
      setRegisterMessage({
        type: "danger",
        message: "Invalid register please try again",
      });
    }
    setRegisterInfo({ firstName: "", lastName: "", email: "", password: "" });
  };

  return (
    <form onSubmit={submitRegister}>
      <h3>Register</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          onChange={change}
          name="firstName"
          value={registerInfo.firstName}
          type="text"
          className="form-control"
          placeholder="First name"
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          onChange={change}
          name="lastName"
          value={registerInfo.lastName}
          type="text"
          className="form-control"
          placeholder="Last name"
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          onChange={change}
          name="email"
          value={registerInfo.email}
          placeholder="Email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={change}
          name="password"
          value={registerInfo.password}
        />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">log in?</a>
      </p>
    </form>
  );
}
