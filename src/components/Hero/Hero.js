import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        David Londoño <br />
        Portfolio
      </SectionTitle>
      <SectionText>
        I specialize in building modern web applications using React.js, HTML, and TailwindCSS, and I am proficient in using Git for version control. I have a strong track record of delivering high-quality, user-friendly solutions to my clients, and I am always looking for new ways to improve my skills and stay up-to-date with the latest technologies.
      </SectionText>
      {/* <Button onCLick={() => window.location = 'https://google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;