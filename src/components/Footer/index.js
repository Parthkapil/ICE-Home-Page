import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							ICE
						</SocialLogo>
						<WebsiteRights>ICE @ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="https://www.instagram.com/iu_ice/"
								target="_blank"
								aria-label="Instagram"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="https://www.linkedin.com/company/ideation-creation-and-entrepreneurs-club-ice/"
								target="_blank"
								aria-label="LinkedIn"
							>
								<FaLinkedinIn />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
