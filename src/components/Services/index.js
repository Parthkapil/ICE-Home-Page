import React from "react";
import Icon2 from "../../images/parth.PNG";
import Icon3 from "../../images/jay.png";
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
		designation: "President",
		img: Icon2,
	},
	{
		name: "Jay Amlani",
		designation: "Vice President",
		img: Icon3,
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
