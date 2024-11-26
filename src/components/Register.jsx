import axios from "axios";
import React, { useState } from "react";

const AddAdmin = () => {
  const [surname, setSurname] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);

  // add nurse using post request method
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const url = "https://tukeiremick.pythonanywhere.com/api/admin_signup";

    const data = {
      surname,
      email,
      phone,
      password,
    };
    axios
      .post(url, data)
      .then((response) => {
        // console.log(response?.data)
        setLoading(false);
        setSuccess(response?.data?.message);
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
        <h1>Add Admin</h1>
        {loading && <p className="text-warning">Loading...Please wait...</p>}
        {success && <p className="text-success">{success}</p>}
        {errors && <p className="text-danger">{errors}</p>}
        <form action="" onSubmit={handleFormSubmit}>
          {/* Surname */}
          <input
            type="text"
            placeholder="Enter surname"
            name="surname"
            className="form-control mb-4"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            className="form-control mb-4"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Enter tel(phone)"
            name="phone"
            className="form-control mb-4"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            name="yourpassword"
            className="form-control mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" class="btn btn-primary">
            Register Adimn
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
