import React,{useEffect,useState} from "react";
import axios from "axios";
// import uuid from "react-uuid";

function AdProfile() {
	const [data, setData] = useState([])

	useEffect(()=> {
		axios.get("http://localhost:3001/api/advocate").then((res)=>{
			console.log("getting from::::",res.data);
			setData(res.data)
		}).catch((err)=> {console.log(err)})
			;
		
	},[])


	
	return (
		<div>
			{data.map((data)=>{
				return(
					<table>
  <tr>
    <th>{data.fullname}</th>
    <th>{data.mobile}</th>
    <th>{data.position}</th>
  </tr>
 
</table>

				)
			})}
		</div>
	);
}

export default AdProfile;
