import React, { useState } from "react";
import axios from "axios";
// import uuid from "react-uuid";

function AdProfile() {
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
	const profileData = data?.profiles || [];

	function displaypro() {
		axios.get("http://localhost:3001/api/advocate", data).then((response) => {
			setData(response.data);
		});
	}

	return (
		<div className="myProfile">
			<h1>Profiles</h1>
			<div className="profiles">
				{profileData.map((profile) => {
					console.log(profile);
					let {
						mobile,
						fullname,
						position,
						ss,
						dob,
						email,
						datestarted,
						datevh,
						saddress,
						paddress,
						obmi,
						verified,
						insurance,
						dsh,
						teamsize,
						p2wsale,
						p2wtsale,
						ohi,
					} = profile;
					return (
						<div className="profileCard">
							<div className="profileCardPhoto"></div>
							<div className="profileCardBody">
								<p style={{ fontWeight: "bold" }}>{`${fullname} `}</p>
								<p>{`mobile: ${mobile}`}</p>
								<p>{`fullname: ${fullname}`}</p>
								<p>{`position: ${position}`}</p>
								<p>{`dob: ${dob}`}</p>
								<p>{`social security: ${ss}`}</p>

								<p>{`email: ${email}`}</p>
								<p>{`date started: ${datestarted}`}</p>
								<p>{`date verified hippa: ${datevh}`}</p>
								<p>{`shipping address: ${saddress}`}</p>
								<p>{`personal address: ${paddress}`}</p>
								<p>{`onboard manager id: ${obmi}`}</p>
								<p>{`verified: ${verified}`}</p>
								<p>{`insurance: ${insurance}`}</p>
								<p>{`date since hired: ${dsh}`}</p>
								<p>{`teamsize: ${teamsize}`}</p>
								<p>{`prev 2 week sale: ${p2wsale}`}</p>
								<p>{`prev 2 week team sale: ${p2wtsale}`}</p>
								<p>{`onhand inventory: ${ohi}`}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default AdProfile;
