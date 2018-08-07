import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    fat: {
        fontWeight: 1100,
        textTransform: 'capitalize'
    },
    thin: {
        fontWeight: 300,
        textTransform: 'capitalize'
    }
});

const OpenTargetsTitle = ({ classes, name }) => (
    <Typography variant='title' color='inherit'>
        <span className={classes.fat}>Open Targets </span>
        <span className={classes.thin}>{name}</span>
    </Typography>
);

export default withStyles(styles)(OpenTargetsTitle);
