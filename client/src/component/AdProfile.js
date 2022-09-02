import React, { useState } from "react";
import axios from "axios";
// import uuid from "react-uuid";

function AdProfile() {
	const [data, setData] = useState([]);
	

	function displaypro() {
		axios.get("http://localhost:3001/api/advocate", data).then((response) => {
			console.log(response);
			setData(response.data);
		});
	}

	return (
		<div className="app">
		  <h2>All datas 📫</h2>
		  {data.map((data) => {
			 return (
				<div className="data-card" key={data.id}>
				   <h2 className="data-title">{data.fullname}</h2>
				   <p className="data-body">{data.ss}</p>
				   {/* <div className="button">
					  <div className="delete-btn">Delete</div>
				   </div> */}
				</div>
			 );
		  })}
		</div>
	  );
}

export default AdProfile;
