import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  }
}));

function Title() {
  return (
    <div>
      <h1>I'm Greg Answer</h1>
      <h2>Software Developer</h2>
    </div>
  );
}

function Description() {
  return (
    <p>
      I'm a full stack software developer from Toronto, Canada. At heart, I'm a problem solver. I design & develop software solutions for the web. My priority is readable and scalable code that makes users smile.
    </p>
  );
}

function Image() {
  return (<div />);
}

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title />
      <Description />
      <Image />
    </div>
  );
}
