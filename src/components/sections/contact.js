import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email, mobile } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .contact-actions {
    margin-top: 40px;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 15px;
    }
  }

  .contact-button {
    ${({ theme }) => theme.mixins.bigButton};
    min-width: 140px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What's Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I'm currently open to new opportunities and exciting projects! Whether you have a job
        opportunity, want to collaborate on a project, or just want to say hi, feel free to
        reach out. I'll try my best to get back to you!
      </p>

      {/* Contact Action Buttons */}
      <div className="contact-actions">
        <a className="contact-button" href={`mailto:${email}`}>
          Send Email
        </a>
        <a className="contact-button" href={`tel:${mobile}`}>
          Call Now
        </a>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
