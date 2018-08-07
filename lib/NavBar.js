import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import OpenTargetsTitle from './OpenTargetsTitle';

const styles = theme => ({
    navbar: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
    }
});

const NavBar = ({ classes, name }) => (
    <AppBar className={classes.navbar} position='static' color='primary'>
        <Toolbar variant='dense'>
            <Button component={Link} to='/' color='inherit'>
                <OpenTargetsTitle name={name} />
            </Button>
        </Toolbar>
    </AppBar>
);

export default withStyles(styles)(NavBar);
