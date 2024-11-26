import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ViewBookings = () => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setErrors ] = useState(null)

    useEffect(() => {
      setLoading(true)
      axios.get("https://tukeiremick.pythonanywhere.com/api/viewbookings")
      .then((response)=>{
        setLoading(false)
        // console.log(response?.data)
        setData(response?.data)
      })
    
    
    }, [])
    


    
  return (
    <table className="table table-striped bg-light p-5 m-1">
    {loading && <div className="text-warning">Loading ... </div>}
    {error && <div className="text-danger"> Error occurred. Try Later </div>}
    <thead>
        <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Member</th>
            <th>Where Taken</th>
            {/* <th>Test Name</th> */}
            <th>Inv No</th>
        </tr>
    </thead>
    <tbody>
        {data && data?.length > 0 ? (
            data?.map((booking) => (
                <tr className="mt-5" key={booking.book_id}>
                    <td>{booking.appointment_date}</td>
                    <td>{booking.appointment_time}</td>
                    <td>{booking.member_id}</td>
                    <td>{booking.where_taken}</td>
                    {/* <td>{booking.test_details.test_name}</td> */}
                    <td>{booking.invoice_no}</td>
            
                </tr>
            ))
        ) : (
            !loading && <tr><td colSpan="6" className="text-center">No bookings found</td></tr>
        )}

    </tbody>
</table>
  )
}

export default ViewBookings