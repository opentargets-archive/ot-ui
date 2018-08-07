import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  page: {
    background: theme.palette.grey["50"],
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    margin: 0,
    width: "100%",
  },
  gridContainer: {
    margin: 0,
    width: "100%",
    flex: "1 0 auto",
  },
});

const Page = ({ classes, header, footer, children }) => (
  <div className={classes.page}>
    {header}
    <Grid
      container
      justify={"center"}
      spacing={24}
      className={classes.gridContainer}
    >
      <Grid item xs={12} md={10} justify={"center"} spacing={16}>
        {children}
      </Grid>
    </Grid>
    {footer}
  </div>
);

export default withStyles(styles)(Page);
