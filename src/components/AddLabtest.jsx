import axios from "axios";
import React, {useState} from "react";

const AddLabtest = () => {
 
  const [testname, setTestname] = useState(null)
  const [testdiscount, setTestdiscount] = useState(null)
  const [testdescription, setTestdescription] = useState(null)
  const [testcost, setTestcost] = useState(null)
  const [moreinfo, setMoreinfo] = useState(null)
  const [availability, setAvailability] = useState(null)

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFormSubmit  = (e)=>{
    e.preventDefault()
    setLoading(true)
     const url = "https://tukeiremick.pythonanywhere.com/api/add_labtest"
    const data = {
      test_name :testname,
      test_description: testdescription,
      test_cost: testcost,
      test_discount:testdiscount,
      availability: availability,
      more_info: moreinfo

    }

    axios.post(url, data)
    .then((response)=>{
      setLoading(false)
      setSuccess(response?.data?.message)
    })
    .catch((error)=>{
      setLoading(false)
      setErrors(error?.message)
    })

  }





  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow col-md-6 p-5">
        <h1>AddLabtest</h1>
        {loading && <p className='text-warning'> Loading...Please wait.. </p>}
        {success && <p className='text-success'> {success} </p>}
        {errors && <p className='text-danger'> {errors} </p>}
        <form action="" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter Test name"
            name="Test name"
            className="form-control mb-3"
            onChange={(e)=>setTestname(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter discount"
            name="Test discount"
            className="form-control mb-3"
            onChange={(e)=>setTestdiscount(e.target.value)}

          />
          <input
            type="text"
            placeholder="Enter Test Description"
            name="Test Description"
            className="form-control mb-3"
            onChange={(e)=>setTestdescription(e.target.value)}

          />
          <input
            type="number"
            placeholder="Enter Test cost"
            name="Test cost"
            className="form-control mb-3"
            onChange={(e)=>setTestcost(e.target.value)}

          />
          <input
            type="text"
            placeholder="More_info"
            name="More_info"
            className="form-control mb-3"
            onChange={(e)=>setMoreinfo(e.target.value)}

          />
          <input
            type="text"
            placeholder="Availability"
            name="Test availability"
            className="form-control mb-3"
            onChange={(e)=>setAvailability(e.target.value)}

          />
   <button type="submit" class="btn btn-primary">Add Labtests</button>



        </form>
      </div>
    </div>
  );
};

export default AddLabtest;
