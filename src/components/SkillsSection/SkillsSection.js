import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import { device } from '../media';

const Container = styled.section`
  ${tw`flex justify-center items-center flex-col mx-auto`}
  div:first-child {
    margin-top: 10px;
  }
  margin: 75px 0;
  padding: 0 42px;
  font-size: 1.4rem;

  @media ${device.tablet} {
    font-size: 1.55rem;
  }

  @media ${device.laptopL} {
    ${tw`flex-row items-start`}
    padding-top: 20px;
    margin: 100px 0;
    div:first-child {
      text-align: right;
      padding-right: 40px;
    }
  }
`;

const SkillsContent = styled.div`
  @media ${device.laptopL} {
    max-width: 675px;
  }
`;

const SkillsSection = () => (
  <Container>
    <SectionTitle
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-delay="480"
      data-sal-easing="easeInOutQuart">
      <span role="img" aria-label="Technologist Man and Coffee Emoji">
        👨🏻‍💻 ☕
      </span>
    </SectionTitle>
    <SkillsContent
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-delay="480"
      data-sal-easing="easeInOutQuart">
      <p>
        The rest of my website is currently in the midst of production! I'm just brewing some coffee
        right now, <strong>BRB!</strong>
      </p>
    </SkillsContent>
  </Container>
);

export default SkillsSection;
