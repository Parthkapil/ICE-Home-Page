import React from "react";
import parth_pic from "../../images/parth.PNG";
import jay_pic from "../../images/jay.jpeg";
import renuka_pic from "../../images/renuka.jpeg";
import pranav_pic from "../../images/pranav.jpg";

import {
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	SevicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesP,
} from "./ServicesElements";

const teamData = [
	{
		name: "Parth Kapil",
		designation: " President        ",
		img: parth_pic,
	},
	{
		name: "Jay Amlani",
		designation: "Vice President",
		img: jay_pic,
	},
	{
		name: "Renuka Srishti",
		designation: "Director of Outreach",
		img: renuka_pic,
	},
	{
		name: "Pranav",
		designation: "Director of Operations",
		img: pranav_pic,
	},
];

const ServiceSection = () => {
	return (
		<ServicesContainer id="team">
			<ServicesH1>Our Team</ServicesH1>
			<SevicesWrapper>
				{teamData.map(member => (
					<ServicesCard>
						<ServicesIcon src={member.img} />
						<ServicesH2>{member.name}</ServicesH2>
						<ServicesP>{member.designation}</ServicesP>
					</ServicesCard>
				))}
			</SevicesWrapper>
		</ServicesContainer>
	);
};

export default ServiceSection;
