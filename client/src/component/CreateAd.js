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
				console.log(response.data);
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
		<div>
			<form className="form">
				<input
					value={data.mobile}
					name="mobile"
					onChange={handleInputChange}
					type="text"
					placeholder="mobile"
				/>
				<input
					value={data.fullname}
					name="fullname"
					onChange={handleInputChange}
					type="text"
					placeholder="full name"
				/>
				<input
					value={data.position}
					name="position"
					onChange={handleInputChange}
					type="text"
					placeholder="position"
				/>
				<input
					value={data.ss}
					name="ss"
					onChange={handleInputChange}
					type="text"
					placeholder="social security"
				/>
				<input
					value={data.dob}
					name="dob"
					onChange={handleInputChange}
					type="text"
					placeholder="dob"
				/>
				<input
					value={data.email}
					name="email"
					onChange={handleInputChange}
					type="text"
					placeholder="email"
				/>
				<input
					value={data.datestarted}
					name="datestarted"
					onChange={handleInputChange}
					type="text"
					placeholder="date started"
				/>
				<input
					value={data.datevh}
					name="datevh"
					onChange={handleInputChange}
					type="text"
					placeholder="date verified hippa"
				/>
				<input
					value={data.saddress}
					name="saddress"
					onChange={handleInputChange}
					type="text"
					placeholder="shipping address"
				/>
				<input
					value={data.paddress}
					name="paddress"
					onChange={handleInputChange}
					type="text"
					placeholder="personal address"
				/>
				<input
					value={data.obmi}
					name="obmi"
					onChange={handleInputChange}
					type="text"
					placeholder="onboard manager id"
				/>
				<button type="button" onClick={createadvo}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default CreateAd;
