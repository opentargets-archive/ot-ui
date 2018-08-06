import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    navbar: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
    }
});

const NavBar = ({ classes }) => (
    <AppBar className={classes.navbar} position='absolute' color='primary'>
        <Toolbar variant='dense'>
            <Typography variant='title' color='inherit'>
                <strong>Open Targets</strong> Genetics
            </Typography>
        </Toolbar>
    </AppBar>
);

export default withStyles(styles)(NavBar);
