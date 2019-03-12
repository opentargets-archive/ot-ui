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
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  hr: {
    marginTop: '1rem',
  },
  flex: {
    flexGrow: 1,
  },
});

const SectionHeading = ({ classes, heading, subheading, entities }) => {
  return (
    <React.Fragment>
      <hr className={classes.hr} />
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
