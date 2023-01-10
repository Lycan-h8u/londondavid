import React from 'react';
import { DiFirebase, DiReact, DiGithubBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, TailwindCSS, JavaScript and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
      <ListItem>
        <DiGithubBadge size='3rem' />
        <ListContainer>
          <ListTitle>Softwares</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
