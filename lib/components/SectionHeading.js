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
    marginBottom: '1rem',
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
          <SubHeading left={subheading} />
        </div>
        <div className={classes.flex} />
        {entities ? <ModelSchematic entities={entities} /> : null}
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(SectionHeading);
