import React from 'react';
import Select from 'react-select/lib/Async';
import { withStyles } from '@material-ui/core/styles';

import Placeholder from './Placeholder';
import NoOptionsMessage from './NoOptionsMessage';
import Control from './Control';
import SingleValue from './SingleValue';
import ValueContainer from './ValueContainer';
import DropdownIndicator from './DropdownIndicator';
import Menu from './Menu';
import OptionContainer from './OptionContainer';
import GroupHeading from './GroupHeading';
import Group from './Group';

const styles = theme => ({
  root: {
    position: 'relative',
    minWidth: '300px',
  },
});

const IndicatorSeparator = () => null;

const Autocomplete = ({
  classes,
  theme,
  optionComponent: OptionComponent,
  onSelectOption,
  onFocus,
  value,
  placeholder,
  options,
  multiple,
}) => {
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
    }),
  };

  const Option = props => (
    <OptionContainer {...props}>
      <OptionComponent data={props.data} />
    </OptionContainer>
  );

  const components = {
    Option,
    Control,
    NoOptionsMessage,
    Placeholder,
    SingleValue,
    ValueContainer,
    Menu,
    DropdownIndicator,
    GroupHeading,
    Group,
    IndicatorSeparator,
  };

  return (
    <div className={classes.root}>
      <Select
        options={options}
        styles={selectStyles}
        components={components}
        value={value}
        onChange={onSelectOption}
        onFocus={onFocus}
        placeholder={placeholder}
        isMulti={multiple}
      />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Autocomplete);
