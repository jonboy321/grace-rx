import React,{useEffect,useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import "./AdProfile.css";
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
		
		<Table striped bordered hover className="table">
		  <thead className="tableHeader">
			<tr className="tableFields">
			  <th>mobile</th>
			  <th>fullname</th>
			  <th>position</th>
			  <th>ss</th>
			  <th>dob</th>
			  <th>email</th>
			  <th>datestarted</th>
			  <th>datevh</th>
			  <th>saddress</th>
			  <th>paddress</th>
			  <th>obmi</th>
			  <th>verified</th>
			  <th>insurance</th>
			  <th>dsh</th>
			  <th>teamsize</th>
			  <th>p2wsale</th>
			  <th>p2wtsale</th>
			  <th>ohi</th>
			</tr>
		  </thead>
		  <tbody className="fieldInputs">
			<tr>
			  <td>{data.mobile}</td>
			  <td>{data.fullname}</td>
			  <td>{data.position}</td>
			  <td>{data.ss}</td>
			  <td>{data.dob}</td>
			  <td>{data.email}</td>
			  <td>{data.datestarted}</td>
			  <td>{data.datevh}</td>
			  <td>{data.saddress}</td>
			  <td>{data.paddress}</td>
			  <td>{data.obmi}</td>
			  <td>{data.verified}</td>
			  <td>{data.insurance}</td>
			  <td>{data.dsh}</td>
			  <td>{data.teamsize}</td>
			  <td>{data.p2wsale}</td>
			  <td>{data.pw2wtsale}</td>
			  <td>{data.ohi}</td>
			</tr>
			<tr>
			  <td>123-555-4321</td>
			  <td>Mark Otto</td>
			  <td>advocate</td>
			  <td>555-55-5555</td>
			  <td>12/30/56</td>
			  <td>abc@def.com</td>
			  <td>06/05/2004</td>
			  <td>06/05/2004</td>
			  <td>123 Bigs Lane</td>
			  <td>123 Bigs Lane</td>
			  <td>12345</td>
			  <td>Yes</td>
			  <td>goodinsure</td>
			  <td>1</td>
			  <td>12</td>
			  <td>8</td>
			  <td>123</td>
			  <td>12</td>
			</tr>
		  </tbody>
		</Table>
	  );
	}
	
		//UPDATE NO MOCK DATA

	// function AdProfile() {
	// 	const [data, setData] = useState([])
	
	// 	useEffect(()=> {
	// 		axios.get("http://localhost:3001/api/advocate").then((res)=>{
	// 			console.log("getting from::::",res.data);
	// 			setData(res.data)
	// 		}).catch((err)=> {console.log(err)})
	// 			;
			
	// 	},[])
	
	// 	return (
	// 		<div>
	// 			{data.map((data)=>{
		
	// 	  return(
	
	// 		<Table striped bordered hover variant="dark" className="table">
	// 		  <thead className="tableHeader">
	// 			<tr className="tableFields">
	// 			  <th>mobile</th>
	// 			  <th>fullname</th>
	// 			  <th>position</th>
	// 			  <th>ss</th>
	// 			  <th>dob</th>
	// 			  <th>email</th>
	// 			  <th>datestarted</th>
	// 			  <th>datevh</th>
	// 			  <th>saddress</th>
	// 			  <th>paddress</th>
	// 			  <th>obmi</th>
	// 			  <th>verified</th>
	// 			  <th>insurance</th>
	// 			  <th>dsh</th>
	// 			  <th>teamsize</th>
	// 			  <th>p2wsale</th>
	// 			  <th>p2wtsale</th>
	// 			  <th>ohi</th>
	// 			</tr>
	// 		  </thead>
	// 		  <tbody className="fieldInputs">
	// 			<tr>
	// 			  <td>{data.mobile}</td>
	// 			  <td>{data.fullname}</td>
	// 			  <td>{data.position}</td>
	// 			  <td>{data.ss}</td>
	// 			  <td>{data.dob}</td>
	// 			  <td>{data.email}</td>
	// 			  <td>{data.datestarted}</td>
	// 			  <td>{data.datevh}</td>
	// 			  <td>{data.saddress}</td>
	// 			  <td>{data.paddress}</td>
	// 			  <td>{data.obmi}</td>
	// 			  <td>{data.verified}</td>
	// 			  <td>{data.insurance}</td>
	// 			  <td>{data.dsh}</td>
	// 			  <td>{data.teamsize}</td>
	// 			  <td>{data.p2wsale}</td>
	// 			  <td>{data.pw2wtsale}</td>
	// 			  <td>{data.ohi}</td>
	// 			</tr>
	// 		  </tbody>
	// 		</Table>)
	// 	  })}
	// 	</div>
	//   );
	// }

	//ORIGINAL

// 	return (
// 		<div>
// 			{data.map((data)=>{
// 				return(
// 					<table>
//   <tr>
//     <th>{data.fullname}</th>
//     <th>{data.mobile}</th>
//     <th>{data.position}</th>
//   </tr>
 
// </table>

// 				)
// 			})}
// 		</div>
// 	);
// }

export default AdProfile;
