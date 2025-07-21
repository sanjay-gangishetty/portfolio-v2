import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledSkillsSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  .skills-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px 40px;
    margin-top: 30px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
`;

const StyledSkillCategory = styled.div`
  padding: 20px 0;
  
  .category-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    h3 {
      color: var(--lightest-slate);
      font-size: var(--fz-lg);
      margin: 0;
    }

    &:before {
      content: '▸';
      color: var(--green);
      margin-right: 8px;
      font-size: var(--fz-md);
    }
  }
`;

const Skills = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      badge: 'https://skillicons.dev/icons?i=html,css,js,react,vite,remix,jquery,bootstrap,tailwindcss&perline=6',
    },
    {
      title: 'Backend',
      badge: 'https://skillicons.dev/icons?i=nodejs,express,php,flask,py,graphql&perline=6',
    },
    {
      title: 'Programming Languages',
      badge: 'https://skillicons.dev/icons?i=js,py,java,c,cpp,php&perline=6',
    },
    {
      title: 'Databases',
      badge: 'https://skillicons.dev/icons?i=mysql,mongodb,sqlite,prisma&perline=6',
    },
    {
      title: 'Cloud & DevOps',
      badge: 'https://skillicons.dev/icons?i=aws,docker,linux,git,github,githubactions,cloudflare,prometheus,grafana&perline=6',
    },
    {
      title: 'Development Environment',
      badge: 'https://skillicons.dev/icons?i=vscode,eclipse,sublime,vim,bash,postman,ubuntu,md&perline=6',
    },
  ];

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Tech Stack</h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <StyledSkillCategory key={index}>
            <div className="category-header">
              <h3>{category.title}</h3>
            </div>
            <div>
              <a
                href="https://skillicons.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${category.title} skills`}
              >
                <img
                  src={category.badge}
                  alt={`${category.title} skills`}
                  loading="lazy"
                />
              </a>
            </div>
          </StyledSkillCategory>
        ))}
      </div>
    </StyledSkillsSection>
  );
};

export default Skills; 