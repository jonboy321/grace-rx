import React, { useState } from "react";
import axios from "axios";

function CreateAd() {
	const [data, setData] = useState({
		mobile: "",
		fullname: "",
		position: "",
		ss: "",
		dob: "",
		email: "",
		datestarted: "",
		datevh: "",
		saddress: "",
		paddress: "",
		obmi: "",
		verified: "",
		insurance: "",
		dsh: "",
		teamsize: "",
		p2wsale: "",
		p2wtsale: "",
		ohi: "",
	});

	function createadvo() {
		axios
			.post("http://localhost:3001/api/advocate", data)
			.then((response) => {
				console.log(response);
				setData(response.data);
			})
			.catch((err) => console.log(err));
	}

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setData({
			...data,
			[name]: value,
		});
	};

	return (
		<div className="formContainer">
			<form className="form">
				<input id="mobile"
					value={data.mobile}
					name="mobile"
					onChange={handleInputChange}
					type="text"
					placeholder="mobile"
				/>
				<input id="fullname"
					value={data.fullname}
					name="fullname"
					onChange={handleInputChange}
					type="text"
					placeholder="full name"
				/>
				<input id="position"
					value={data.position}
					name="position"
					onChange={handleInputChange}
					type="text"
					placeholder="position"
				/>
				<input id="ss"
					value={data.ss}
					name="ss"
					onChange={handleInputChange}
					type="text"
					placeholder="social security"
				/>
				<input id="dob"
					value={data.dob}
					name="dob"
					onChange={handleInputChange}
					type="text"
					placeholder="dob"
				/>
				<input id="email"
					value={data.email}
					name="email"
					onChange={handleInputChange}
					type="text"
					placeholder="email"
				/>
				<input id="datestarted"
					value={data.datestarted}
					name="datestarted"
					onChange={handleInputChange}
					type="text"
					placeholder="date started"
				/>
				<input id="datevh"
					value={data.datevh}
					name="datevh"
					onChange={handleInputChange}
					type="text"
					placeholder="date verified hippa"
				/>
				<input id="saddress"
					value={data.saddress}
					name="saddress"
					onChange={handleInputChange}
					type="text"
					placeholder="shipping address"
				/>
				<input id="paddress"
					value={data.paddress}
					name="paddress"
					onChange={handleInputChange}
					type="text"
					placeholder="personal address"
				/>
				<input id="obmi"
					value={data.obmi}
					name="obmi"
					onChange={handleInputChange}
					type="text"
					placeholder="onboard manager id"
				/>
			</form>
			<div className="btnContainer">
				<button className="submitBtn" type="button" onClick={createadvo}>
					Submit
				</button>
			</div>
		</div>
	);
}

export default CreateAd;
