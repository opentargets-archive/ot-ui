import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

import OpenTargetsTitle from './OpenTargetsTitle';

const styles = theme => ({
    homebox: {
        padding: 16,
        minHeight: '100vh'
    },
    homeboxContainer: {
        minHeight: '100vh'
    },
    homeboxHeader: {
        textAlign: 'center'
    }
});

const HomeBox = ({ classes, name, children }) => (
    <div className={classes.homebox}>
        <Grid className={classes.homeboxContainer} container justify={'center'} alignItems={'center'} spacing={24}>
            <Grid item xs={12} md={8} lg={6} justify={'center'} spacing={16}>
                <Card>
                    <CardHeader className={classes.homeboxHeader} title={<OpenTargetsTitle name={name} />} />
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(HomeBox);
