import axios from 'axios'
import React,{useState} from 'react'

const AddNurses = () => {
  const [surname, setSurname] = useState(null)
  const [others, setOthers] =useState(null)
  const [gender, setGender] =useState(null)
  const [email, setEmail] =useState(null)
  const [phone, setPhone] =useState(null)
  const [password, setPassword] =useState(null)

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);

  // add nurse using post request method 
  const handleFormSubmit = (e) =>{
    e.preventDefault()
    setLoading(true)



  const url = "https://tukeiremick.pythonanywhere.com/api/add_nurse"
  const data = {
    surname, others, gender, email, phone, password
  }
  axios.post(url, data)
  .then((response)=>{
    // console.log(response?.data)
    setLoading(false)
    setSuccess(response?.data?.message)

  })
  .catch((error)=>{
    // console.log(error?.message)
    setLoading(false)
    setErrors(error?.message)
  })

}





  return (
    <div className='d-flex  justify-content-center mt-5'>


  
    <div  className='card shadow col-md-6 p-5'>
        <h1>Add Nurses</h1>
        {loading && <p className='text-warning'> Loading...Please wait.. </p>}
        {success && <p className='text-success'> {success} </p>}
        {errors && <p className='text-danger'> {errors} </p>}
        <form action="" onSubmit={handleFormSubmit} >
         {/* surname  */}
         <input type="text" placeholder='Enter surname'  name='surname' className='form-control mb-4'  onChange={(e)=> setSurname(e.target.value)} />
         <input type="text" placeholder='Enter others'  name='others' className='form-control mb-4'  onChange={(e)=>setOthers(e.target.value)} />
         <input type="text" placeholder='Enter gender'  name='gender' className='form-control mb-4'  onChange={(e)=>setGender(e.target.value)} />
         <input type="email" placeholder='Enter email'  name='email' className='form-control mb-4' onChange={(e)=>setEmail(e.target.value)} />
         <input type="tel" placeholder='Enter tel(phone)'  name='phone' className='form-control mb-4' onChange={(e)=>setPhone(e.target.value)} />
         <input type="password" placeholder='Enter pasword'  name='password' className='form-control mb-4'  onChange={(e)=>setPassword(e.target.value)}/>

         <button type="submit" class="btn btn-primary">Register Nurse</button>





         

        </form>
    </div>
    </div>
  )
}

export default AddNurses