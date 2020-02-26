import React from 'react';
import styled from 'styled-components';
import { device } from '../media';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #07323b;
  padding: 30px 40px;

  .left-logo {
    max-width: 200px;
  }
  ul {
    display: flex;
    font-weight: 600;
    letter-spacing: 0.04rem;
    li {
      margin: 0 4px;
    }
  }
  a {
    text-decoration: none;
  }
  @media ${device.laptop} {
    padding: 65px 170px;
    margin-left: calc(-50vw + 50% + 7px);
    width: calc(100vw - 15px);
    ul li {
      margin: 0 30px;
    }
  }
`;

const NameChange = styled.span`
  font-size: 1.6rem;
  letter-spacing: 0.04rem;
  font-family: 'Arnhem-Normal', sans-serif;
`;

const NavBar = () => (
  <FooterContainer>
    <h3 className="left-logo">
      Designed and Developed by <NameChange>Eric Jae-Min Joo</NameChange> 👏
    </h3>
    <ul>
      <li>
        <a href="https://github.com/jjmin" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ericjaeminjoo"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="mailto:ericjaeminjoo@gmail.com" target="_blank" rel="noopener noreferrer">
          Email
        </a>
      </li>
      <li>
        <a
          href="https://ericjaeminjoo.com/static/resume-2020-96af0aaced2cb789aec97401bb96251c.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Resume
        </a>
      </li>
    </ul>
  </FooterContainer>
);

export default NavBar;
