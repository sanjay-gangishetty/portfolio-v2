import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Sanjay Kumar</h2>;
  const three = <h3 className="big-heading">I build scalable web apps.</h3>;
  const four = (
    <>
      {/* <p>
        I'm a full-stack software engineer with a proven track record of transforming ideas into scalable SaaS solutions. Over the past year, I've architected and deployed 14+ Shopify applications, with 8+ live on the App Store, each scaled from zero to 100+ users.
        Currently spearheading innovation at{' '}
        <a href="https://qressy.com" target="_blank" rel="noreferrer">
          Qressy
        </a>
        , where I lead cutting-edge e-commerce solutions empowering 1,000+ merchants. My expertise spans the entire development lifecycle—from conceptualization to deployment—creating robust applications that solve complex business challenges in digital commerce.
      </p> */}
      <p>
        Software development engineer building scalable SaaS products. Led 14+ Shopify apps, 8+ live on the App Store. Currently driving e-commerce innovation at {' '}
        <a href="https://qressy.com" target="_blank" rel="noreferrer">Qressy</a>
        , supporting 1,000+ merchants.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="GangishettySanjayKumar.pdf"
      target="_blank"
      rel="noreferrer">
      Download Resume
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
