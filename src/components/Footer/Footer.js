import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:david.londono120@gmail.com'>david.londono120@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        {/* <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer> */}
        <SocialContainer>
          <SocialIcons href='https://github.com/Lycan-h8u'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/david54/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
