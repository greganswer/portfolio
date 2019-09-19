import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import data from '../data/projects.json';

const useStyles = makeStyles(theme => ({
  root: {
  }
}));

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PreviewContainer = styled.div`
  h3 {
  }
`;

const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`;

export default function Projects() {
  const classes = useStyles();

  return (
    <ProjectsContainer className={classes.root}>
      {Object.values(data).map(({ title, image }) => (
        <PreviewContainer>
          <BackgroundImageContainer image={image} />
          <h3>{title}</h3>
        </PreviewContainer>
      ))}
    </ProjectsContainer>
  );
}
