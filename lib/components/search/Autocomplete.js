import React from 'react';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Placeholder from './Placeholder';
import NoOptionsMessage from './NoOptionsMessage';
import SingleValue from './SingleValue';
import ValueContainer from './ValueContainer';
import Menu from './MenuFilter';
import MultiValue from './MultiValue';

const styles = theme => ({
  root: {
    position: 'relative',
    minWidth: '70px',
  },
});

const IndicatorSeparator = () => null;

const ClearIndicator = () => null;

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontSize: '0.8rem',
        fontWeight: props.isSelected ? 500 : 400,
        padding: '0 5px',
        borderLeft: `4px solid ${
          props.data.selected
            ? '#0091eb'
            : props.data.chained
              ? '#ff6350'
              : '#9e9e9e'
        }`,
        marginLeft: '2px',
        marginBottom: '2px',
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

const InputComponent = ({ inputRef, ...rest }) => (
  <div ref={inputRef} {...rest} />
);

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent: InputComponent,
        inputProps: {
          style: { display: 'flex', backgroundColor: '#eee' },
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
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
      menuPortal: base => ({ ...base, zIndex: 9999 }),
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
          menuPortalTarget={document.body}
          menuPlacement="auto"
          menuPosition="absolute"
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Autocomplete);
