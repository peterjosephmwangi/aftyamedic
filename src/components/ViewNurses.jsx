import React, { useEffect, useState } from "react";
import axios from "axios";
const ViewNurses = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    // fetch the data from api
    setLoading(true);
    axios
      .get("https://tukeiremick.pythonanywhere.com/api/view_nurse")
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
    return <div> Loading...</div>;
  }
  if (errors) {
    return <div> An Error Occured</div>;
  }
  console.log(data);
  return (
    <table class="table table-dark mt-3">
      <thead>
        <tr>
          <th scope="col">#(Nurses_id)</th>
          <th scope="col">Email</th>
          <th scope="col">Gender</th>
          <th scope="col">Others</th>
          <th scope="col">Surname</th>
          <th scope="col">Phone</th>

        </tr>
      </thead>
      <tbody>
        {data?.map((viewnurse) => (
          <tr>
            <th scope="row">{viewnurse?.nurse_id}</th>
            <td>{viewnurse?.email}</td>
            <td>{viewnurse?.gender}</td>
            <td>{viewnurse?.others}</td>
            <td>{viewnurse?.surname}</td>
            <td>{viewnurse?.phone}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewNurses;
