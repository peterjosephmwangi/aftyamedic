import React, { useState, useEffect } from "react";
import axios from "axios";
const ViewLabtests = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    // fetch the data from api
    setLoading(true);
    axios
      .get("https://tukeiremick.pythonanywhere.com/api/viewlab_test")
      .then((response) => {
        setLoading(false);
        setData(response?.data);
      })
      .catch((error) => {
        setLoading(false);
        setErrors(error?.message);
      });
  }, []);

  if (loading) {
    return <div> Loading... </div>;
  }

  if (errors) {
    return <div> An Error Occured </div>;
  }

  return (
    <table class="table table-dark mt-3">
      <thead>
        <tr>
          <th scope="col">#(Test ID)</th>
          <th scope="col">Test Name</th>
          <th scope="col">Test Cost</th>
          <th scope="col">Discount(%)</th>
          <th scope="col">Availability</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((labtest) => (
          <tr>
            <th scope="row">{labtest?.test_id}</th>
            <td>{labtest?.test_name}</td>
            <td> {labtest?.test_cost}</td>
            <td>{labtest?.test_discount}</td>
            <td>{labtest?.availability}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewLabtests;
