import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size='3rem' /> <Span>Portafolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link legacyBehavior href='#projects'>
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='#tech'>
          <NavLink>Tecnologías</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='#about'>
          <NavLink>Sobre mí</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target='_blank' href='https://github.com/davidldv'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons target='_blank' href='https://www.linkedin.com/in/davidldv/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;