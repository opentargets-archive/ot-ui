import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    page: {
        background: theme.palette.grey['50'],
        padding: 24,
        ...theme.mixins.gutters()
    }
});

const Page = ({ classes, version, children }) => (
    <div className={classes.page}>
        <Grid container justify={'center'} spacing={24}>
            <Grid item xs={12} md={10} justify={'center'} spacing={16}>
                {children}
            </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(Page);
