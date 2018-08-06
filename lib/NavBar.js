import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    navbar: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
    },
    fat: {
        fontWeight: 1100,
        textTransform: 'capitalize'
    },
    thin: {
        fontWeight: 300,
        textTransform: 'capitalize'
    }
});

const NavBar = ({ classes, name }) => (
    <AppBar className={classes.navbar} position='static' color='primary'>
        <Toolbar variant='dense'>
            <Button component={Link} to='/' color='inherit'>
                <Typography variant='title' color='inherit'>
                    <span className={classes.fat}>Open Targets </span>
                    <span className={classes.thin}>{name}</span>
                </Typography>
            </Button>
        </Toolbar>
    </AppBar>
);

export default withStyles(styles)(NavBar);
