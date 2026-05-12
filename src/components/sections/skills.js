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

  .skill-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill-pill {
    background: var(--light-navy);
    color: var(--green);
    border: 1px solid var(--green);
    border-radius: 4px;
    padding: 4px 12px;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    opacity: 0.85;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
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
      title: 'AI & LLM',
      pills: [
        'LangGraph',
        'Anthropic Claude SDK',
        'OpenAI SDK',
        'Google Gemini',
        'MCP (Model Context Protocol)',
        'Pinecone',
        'Tavily',
        'Pydantic',
        'Structured Outputs',
      ],
    },
    {
      title: 'Backend',
      pills: [
        'Node.js',
        'TypeScript',
        'Python',
        'Express.js',
        'FastAPI',
        'REST APIs',
        'Webhooks',
        'Prisma ORM',
        'Raw SQL',
      ],
    },
    {
      title: 'AWS & DevOps',
      pills: [
        'AWS Lambda',
        'EventBridge Scheduler',
        'ECR',
        'S3',
        'CloudWatch',
        'IAM',
        'Docker',
        'GitHub Actions',
      ],
    },
    {
      title: 'Databases',
      pills: ['MySQL', 'MongoDB', 'Redis', 'Bull Queue'],
    },
    {
      title: 'Shopify',
      pills: [
        'Remix',
        'Polaris',
        'GraphQL Admin API',
        'Storefront API',
        'Bulk Operations API',
        'Webhooks',
      ],
    },
    {
      title: 'Languages',
      pills: ['JavaScript', 'TypeScript', 'Python', 'Java'],
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
            <div className="skill-pills">
              {category.pills.map((pill, i) => (
                <span key={i} className="skill-pill">
                  {pill}
                </span>
              ))}
            </div>
          </StyledSkillCategory>
        ))}
      </div>
    </StyledSkillsSection>
  );
};

export default Skills;
