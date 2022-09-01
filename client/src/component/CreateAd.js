import React,{useState} from 'react';
import axios from 'axios'

function CreateAd() {
    const [data,setData] = useState({fname:"",
                                    lname:""})
    
    function createadvo() {
        axios
        .post("http://localhost:3001/api/advocate")
        .then((response)=>{
            setData(response.data)
        })
    }


return(
    <div className='createbox'>
        <div className='fname'>
       <p>{data.fname}first name</p>
       </div>
       <div className='lname'>
      <p>{data.lname}last name</p>
      </div>
      <button onClick={createadvo}>Create advocate</button>
    </div>
  );
}

export default CreateAd;
