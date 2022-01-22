import React from "react";
import Icon2 from "../../images/parth.PNG";
import Icon3 from "../../images/himanshu.PNG";
import Icon4 from "../../images/default.svg";
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
		name: "Himanshu Hansaria",
		designation: "Vice President",
		img: Icon3,
	},
	{
		name: "Lavanya Subramanian",
		designation: "Lead --",
		img: Icon4,
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
