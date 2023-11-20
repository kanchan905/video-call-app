import React,{useState,useCallback} from 'react'

const Lobby = () => {
  const [email,setEmail] = useState(" ");
  const [room,setRoom] = useState(" ");
  const handlesubmitform = useCallback((e)=>{
    e.preventDefault();
    console.log(
      {
        email,
        room,
    });
  })
  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handlesubmitform}>
       <label htmlFor='email'> Email</label>
       <input type='email' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
       <br/>
       <label htmlFor='room'>Room number</label>
       <input type='text' id='room' value={room} onChange={(e)=>{setRoom(e.target.value)}}/>
       <br/>
       <button>join</button>
      </form>
    </div>
  )
}

export default Lobby
