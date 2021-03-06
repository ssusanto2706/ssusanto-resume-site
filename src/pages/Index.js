import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Samantha J Susanto's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>
          <p>Hi, I am currently a third year UCSD student majoring in Cognitive Science
            Specializing in Machine Learning and Neural Computation &amp;
          minoring in both Computer Science and Business.
          </p>
        </div>
      </header>
      <p> Welcome to my personal website. You can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        or <Link to="/projects">projects</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
