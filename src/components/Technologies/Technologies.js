import React from 'react';
import { DiFirebase, DiReact, DiGithubBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologías</SectionTitle>
    <SectionText>
      He trabajado con muchas tecnologías a lo largo de mi carrera, como son:
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            HTML5, TailwindCSS, TypeScript, React.js, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            Node.js, Express.js, Nest.js and Databases: PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGithubBadge size='3rem' />
        <ListContainer>
          <ListTitle>Softwares</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            Git, Scrum, Amazon Web Services
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
