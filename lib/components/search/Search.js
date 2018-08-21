import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { withStyles } from '@material-ui/core/styles';

import Placeholder from './Placeholder';
import NoOptionsMessage from './NoOptionsMessage';
import Control from './Control';
import SingleValue from './SingleValue';
import ValueContainer from './ValueContainer';
import DropdownIndicator from './DropdownIndicator';
import Menu from './Menu';
import OptionContainer from './OptionContainer';

const styles = theme => ({
  root: {
    position: 'relative',
  },
});

class Search extends React.Component {
  render() {
    const {
      classes,
      theme,
      optionComponent: OptionComponent,
      onInputChange,
      onSelectOption,
      value,
      placeholder,
    } = this.props;

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
    };

    return (
      <div className={classes.root}>
        <AsyncSelect
          loadOptions={onInputChange}
          styles={selectStyles}
          components={components}
          value={value}
          onChange={onSelectOption}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Search);