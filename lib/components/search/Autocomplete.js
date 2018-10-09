import React from 'react';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';

import Placeholder from './Placeholder';
import NoOptionsMessage from './NoOptionsMessage';
import Control from './Control';
import SingleValue from './SingleValue';
import ValueContainer from './ValueContainer';
import Menu from './MenuFilter';

const styles = theme => ({
  root: {
    position: 'relative',
    minWidth: '70px',
  },
});

const IndicatorSeparator = () => null;

function MultiValue(props) {
  return (
    <Chip
      key={props.selectProps.getOptionValue(props.data)}
      tabIndex={-1}
      label={props.children}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

const ClearIndicator = () => null;

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
        padding: '0 5px',
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

class Autocomplete extends React.Component {
  state = {
    value: null,
  };
  handleChange = value => {
    this.setState({ value });
  };
  render() {
    const {
      classes,
      theme,
      placeholder,
      options,
      multiple,
      value,
      handleSelectOption,
      getOptionLabel,
      getOptionValue,
    } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
      }),
    };

    const components = {
      Control,
      NoOptionsMessage,
      Placeholder,
      SingleValue,
      ValueContainer,
      Menu,
      Option,
      MultiValue,
      IndicatorSeparator,
      ClearIndicator,
    };

    return (
      <div className={classes.root}>
        <Select
          options={options}
          styles={selectStyles}
          components={components}
          value={value}
          onChange={handleSelectOption}
          placeholder={placeholder}
          isMulti={multiple}
          hideSelectedOptions={false}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Autocomplete);
