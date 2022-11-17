import React from "react";
import parth_pic from "../../images/parth.PNG";
import jay_pic from "../../images/jay.jpeg";
import renuka_pic from "../../images/renuka.jpeg";
import pranav_pic from "../../images/pranav.jpg";
import evan_pic from "../../images/evan.jpg";
import hannah_pic from "../../images/hannah.jpg";

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
		name: "Evan zona",
		designation: "President",
		img: evan_pic,
	},
	{
		name: "Pranav",
		designation: "Vice President",
		img: pranav_pic,
	},
	{
		name: "Renuka Srishti",
		designation: "Director of Outreach",
		img: renuka_pic,
	},
	{
		name: "Hannah Jiao",
		designation: "Design Director",
		img: hannah_pic,
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
