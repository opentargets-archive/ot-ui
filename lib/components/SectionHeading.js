import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
          <Typography variant="h5">{heading}</Typography>
          <SubHeading left={subheading} />
        </div>
        <div className={classes.flex} />
        {entities ? <ModelSchematic entities={entities} /> : null}
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(SectionHeading);
