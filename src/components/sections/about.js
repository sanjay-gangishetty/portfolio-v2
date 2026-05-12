import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'LangGraph & LLM Agents',
    'Node.js & TypeScript',
    'Python & FastAPI',
    'AWS Lambda & EventBridge',
    'MCP (Model Context Protocol)',
    'MySQL, Redis & MongoDB',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi, I'm{' '}
              <a
                href="https://www.linkedin.com/in/sanjay-gangishetty"
                target="_blank"
                rel="noopener noreferrer">
                Sanjay
              </a>
              , a Backend & AI Engineer based in Hyderabad. I build the infrastructure that makes
              LLM-powered products work at scale — orchestration agents, event-driven batch systems,
              and multi-provider AI pipelines.
            </p>

            <p>
              I'm currently the Founding Engineer at{' '}
              <a href="https://comergent.ai" target="_blank" rel="noopener noreferrer">
                Comergent AI
              </a>
              , an{' '}
              <a href="https://www.antler.co" target="_blank" rel="noopener noreferrer">
                Antler
              </a>
              -backed pre-seed startup building GEO/AEO infrastructure for Shopify merchants. I
              architected the entire backend from scratch — from a LangGraph multi-provider content
              agent running across 100+ stores concurrently, to an event-driven batch orchestrator
              that cut AI API calls by 73%.
            </p>

            <p>
              Before that, I led the product engineering division at{' '}
              <a href="https://qressy.com" target="_blank" rel="noopener noreferrer">
                Qressy
              </a>
              , shipping 12+ production Shopify apps serving 600+ active merchants. I also hold a{' '}
              <a
                href="https://leetcode.com/u/sanjaykumarg/"
                target="_blank"
                rel="noopener noreferrer">
                LeetCode rating of 1552
              </a>{' '}
              (top 35% globally) and have 2,772 GitHub contributions in the last year.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
