import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        David Londoño <br />
        Portafolio
      </SectionTitle>
      <SectionText>
        Soy trabajador en equipo, me defino por ser una persona con ganas de aprender, dinámica y de fácil de adaptación.
      </SectionText>
      {/* <Button onCLick={() => window.location = 'https://google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;