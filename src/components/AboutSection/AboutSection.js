import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import { device } from '../media';

const Container = styled.section`
  ${tw`flex justify-center items-center flex-col mx-auto`}
  background-color: rgb(80, 0, 202, 0.1);
  padding: 0 45px;

  @media ${device.laptopL} {
    ${tw`flex-row items-start`}
    margin-left: calc(-50vw + 50% + 9px);
    width: calc(100vw - 17px);
  }
`;

const AboutContent = styled.div`
  margin-bottom: 47px;
  max-width: 675px;
  width: 100%;

  @media ${device.tablet} {
    font-size: 1.55rem;
  }

  @media ${device.laptopL} {
    margin-top: -56px;
  }
`;

const AboutSection = () => (
  <Container>
    <SectionTitle
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease">
      Background
    </SectionTitle>
    <AboutContent
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease">
      <p>
        I recently graduated from <strong>McGill University</strong>, located in Montréal, Québec,
        with a bachelor's degree in <strong>Software Engineering</strong>.
      </p>
      <p>
        I combine my sense of aesthetics for design and technical abilities to develop beautiful
        products. I love challenging myself with the unknown as it gives me an opportunity on
        learning new technologies; which in turn, keeps me motivated to keep coding!
      </p>
      <p>
        <strong>If I'm not sitting at my computer</strong>, I'm either learning new dishes to cook,
        hanging out with friends, or just being a 🤓.
      </p>
    </AboutContent>
  </Container>
);

export default AboutSection;
