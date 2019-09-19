import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a href='https://github.com/greganswer'>
        <i class="fab fa-github" /> GitHub
      </a>
      &nbsp;
      <a href='https://github.com/greganswer'>
        <i class="fab fa-linkedin" /> LinkedIn
      </a>
    </div>
  );
}
