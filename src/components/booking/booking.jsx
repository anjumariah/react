import React,{useState} from 'react'
import './booking.css'
import axios from 'axios';

 const Booking = () => {

    const [name,setName] = useState('');
    const [date,setDate] = useState('')
    const [time,setTime] = useState('')
    const [physician,setPhysician] = useState('')
    const[idProof,setIdProof]= useState('')

    const handleNameChange = (e) => {
        setName(e.target.value);
      }
      const handleDateChange = (e) => {
        setDate(e.target.value);
      }

      const handleTimeChange = (e) => {
        setTime(e.target.value);
      }
      const handlePhysicianChange = (e) => {
        setPhysician(e.target.value);
      }
      const handleIdProofChange = (e) => {
        setIdProof(e.target.files);
      }
     
      const handleSubmit = (e) =>{
        setName('')
        setDate('')
        setTime('')
        setPhysician('')
        setIdProof('')

        e.preventDefault();



        // axios.post('http://localhost:3005/book/booking', bookingData)
        // .then(res => console.log(res,"BOOKING INFO------"))
        

      async  function verifyBooking(){
        const token= JSON.parse(localStorage.getItem("token"))
        console.log(token) 
       
        
        
        // console.log(idProof,"FILE UPLOADED");
        // console.log(formData,"FORM_DATA");
        
        if(token){
          const bookingData= {name:name,date:date,time:time,physician:physician,idProof:idProof}
          console.log(bookingData,"BOOK");

        const data = new FormData();
        data.append('name',name);
        data.append('date',date);
        data.append('time',time);
        data.append('physician',physician);
        data.append('file',idProof[0]);
          try{
            axios({
              method:'post',       
              url:'http://localhost:3005/book/booking',
              data:data,
                          
          })
          }catch(err){
            console.log(err);
          }
       
        }
      }
      verifyBooking()
      }

  return (
    <div className='bookingPage'>
      <h2>Booking Page</h2>
      <form onSubmit={(e) => { handleSubmit(e) }} className='bookingPage' >
        <input type="text" 
        placeholder = "Enter Name"
        value={name}
        onChange={handleNameChange}
        /><br/>
         <input type="date" 
        placeholder = "date"
        value={date}
        onChange={handleDateChange}
        /><br/>
         <input type="time" 
        placeholder = "time"
        value={time}
        onChange={handleTimeChange}
        /><br/>
         <input type="select" 
        placeholder = "doctor"
        value={physician}
        onChange={handlePhysicianChange}
        /><br/>
         <input type="file" 
         name='file'
        placeholder = "upload ID"
        // value={idProof}
        onChange={handleIdProofChange}
        /><br/>
        <button>BookNow</button>
      </form>
    </div>
  )
}

export default Booking 
