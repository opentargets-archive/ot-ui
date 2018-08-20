import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';

const ListTooltip = ({ dataList, open, anchorEl }) => (
  <Popper
    open={open}
    anchorEl={anchorEl}
    transition
    placement="bottom"
    modifiers={{
      preventOverflow: {
        enabled: true,
        boundariesElement: 'window',
      },
    }}
  >
    {({ TransitionProps }) => (
      <Fade {...TransitionProps} timeout={350}>
        <Paper>
          <List dense>
            {dataList.map((d, i) => (
              <ListItem key={i}>
                <ListItemText primary={d.label} secondary={d.value} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Fade>
    )}
  </Popper>
);

export default ListTooltip;
