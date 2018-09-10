import React from 'react';
import classNames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  modelSchematic: {
    fontFamily: 'sans-serif',
  },
  entityCircle: {
    strokeWidth: 2,
    stroke: theme.palette.grey[500],
    fill: theme.palette.grey[300],
  },
  entityCircleFixed: {
    fill: theme.palette.primary.main,
    stroke: theme.palette.primary.main,
  },
  entityText: {
    fill: theme.palette.grey[500],
    alignmentBaseline: 'central',
    textAnchor: 'middle',
    fontSize: 12,
    fontWeight: 'bold',
    '&>tspan': {
      fontSize: 8,
    },
  },
  entityTextFixed: {
    fill: theme.palette.primary.contrastText,
  },
  connectorLine: {
    strokeWidth: 2,
    stroke: theme.palette.grey[500],
  },
});

const ModelSchematic = ({ classes, entities }) => {
  const entityWidth = 30;
  const entityRadius = entityWidth / 2 - 2;
  const connectorWidth = 20;
  const totalWidth =
    entityWidth * entities.length + connectorWidth * (entities.length - 1);
  const totalHeight = entityWidth;

  const lookupNice = {
    gene: 'gene',
    variant: 'variant',
    study: 'study',
    indexVariant: 'lead variant',
    tagVariant: 'tag variant',
  };
  const tuple = entities.map(d => lookupNice[d.type]);
  const fixed = entities.filter(d => d.fixed).map(d => lookupNice[d.type]);
  const title = `This section shows (${tuple.join(', ')}) tuples${
    fixed.length > 0 ? ` where the ${fixed[0]} is fixed` : ''
  }`;
  return (
    <Tooltip title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${totalWidth}px`}
        height={`${totalHeight}px`}
        className={classes.modelSchematic}
      >
        <g>
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
                  className={classNames(classes.entityCircle, {
                    [classes.entityCircleFixed]: d.fixed,
                  })}
                />
                <text
                  x={0}
                  y={0}
                  className={classNames(classes.entityText, {
                    [classes.entityTextFixed]: d.fixed,
                  })}
                >
                  {label}
                </text>
              </g>
            );
          })}
        </g>
        <g>
          {entities.map((d, i) => {
            if (i < entities.length - 1) {
              return (
                <line
                  x1={entityWidth + i * (entityWidth + connectorWidth)}
                  y1={totalHeight / 2}
                  x2={(i + 1) * (entityWidth + connectorWidth)}
                  y2={totalHeight / 2}
                  key={i}
                  className={classes.connectorLine}
                />
              );
            } else {
              return null;
            }
          })}
        </g>
      </svg>
    </Tooltip>
  );
};

export default withStyles(styles)(ModelSchematic);
