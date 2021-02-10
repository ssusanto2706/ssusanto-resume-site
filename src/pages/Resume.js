import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import Activities from '../components/Resume/Activities';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';
import clubs from '../data/resume/clubs';

const sections = [
  'Education',
  'Courses',
  'Experience',
  'Activities',
  'Skills',

];

const Resume = () => (
  <Main
    title="Resume"
    description="Samantha J Susanto's Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume" href="%PUBLIC_URL%/Resume.pdf" target="_blank" rel="noreferrer">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Courses data={courses} />
      <Experience data={positions} />
      <Activities data={clubs} />
      <Skills skills={skills} categories={categories} />

    </article>
  </Main>
);

export default Resume;
