import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);

  // add nurse using post request method
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const url = "https://tukeiremick.pythonanywhere.com/api/admin_signin";

    const data = {
      email,
      password,
    };
    axios
      .post(url, data)
      .then((response) => {
        // console.log(response?.data);
        // we are going to use local storage  to save items 
        // we will save the access token
        localStorage.setItem("access_token", response?.data?.access_token)
        // we are going to save admin name in local storage 
        localStorage.setItem("surname", response?.data?.message?.surname)
        setLoading(false);
        // setSuccess(response?.data?.message)
      })
      .catch((error) => {
        // console.log(error?.message)
        setLoading(false);
        setErrors(error?.message);
      });
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow col-md-6 p-5">
        <h1>Login</h1>
        {loading && <p className="text-warning">Loading...Please wait...</p>}
        {success && <p className="text-success">{success}</p>}
        {errors && <p className="text-danger">{errors}</p>}
        <form action="" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            className="form-control mb-4"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            name="yourpassword"
            className="form-control mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
