import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Heading from './typography/Heading';
import SubHeading from './typography/SubHeading';
import ModelSchematic from './ModelSchematic';

const styles = theme => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '1rem',
  },
  flex: {
    flexGrow: 1,
  },
});

const SectionHeading = ({ classes, heading, subheading, entities }) => {
  return (
    <React.Fragment>
      <hr />
      <div className={classes.container}>
        <div>
          <Heading>{heading}</Heading>
          <SubHeading>{subheading}</SubHeading>
        </div>
        <div className={classes.flex} />
        <ModelSchematic entities={entities} />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(SectionHeading);
