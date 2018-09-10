import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  modelSchematic: {
    fontFamily: 'sans-serif',
  },
  entityCircle: {
    fill: theme.palette.primary.main,
  },
  entityText: {
    fill: 'white',
    alignmentBaseline: 'central',
    textAnchor: 'middle',
    fontSize: 12,
    fontWeight: 'bold',
    '&>tspan': {
      fontSize: 8,
    },
  },
});

const ModelSchematic = ({ classes, entities }) => {
  const entityWidth = 30;
  const entityRadius = entityWidth / 2 - 2;
  const connectorWidth = 20;
  const totalWidth =
    entityWidth * entities.length + connectorWidth * (entities.length - 1);
  const totalHeight = entityWidth;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${totalWidth}px`}
      height={`${totalHeight}px`}
      className={classes.modelSchematic}
    >
      {entities.map((d, i) => {
        let label;
        switch (d.type) {
          case 'gene':
            label = 'G';
            break;
          case 'study':
            label = 'S';
            break;
          case 'variant':
            label = 'V';
            break;
          case 'indexVariant':
            label = (
              <React.Fragment>
                V<tspan dy="8">L</tspan>
              </React.Fragment>
            );
            break;
          case 'tagVariant':
            label = (
              <React.Fragment>
                V<tspan dy="8">T</tspan>
              </React.Fragment>
            );
            break;
          default:
            label = null;
        }
        return (
          <g
            key={i}
            transform={`translate(${entityWidth / 2 +
              i * (entityWidth + connectorWidth)},${totalHeight / 2})`}
          >
            <circle
              cx={0}
              cy={0}
              r={entityRadius}
              className={classes.entityCircle}
            />
            <text x={0} y={0} className={classes.entityText}>
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default withStyles(styles)(ModelSchematic);
