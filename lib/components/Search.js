import React from 'react';
import { withRouter } from 'react-router';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import AsyncSelect from 'react-select/lib/Async';
import { withStyles } from '@material-ui/core/styles';

import Placeholder from './search/Placeholder';
import NoOptionsMessage from './search/NoOptionsMessage';
import Control from './search/Control';
import SingleValue from './search/SingleValue';
import ValueContainer from './search/ValueContainer';
import DropdownIndicator from './search/DropdownIndicator';
import Menu from './search/Menu';
import OptionContainer from './search/OptionContainer';

const asGroupedOptions = data => {
  return [
    {
      label: 'Genes',
      options: data.genes.map(d => ({ ...d, groupType: 'gene' })),
    },
    {
      label: 'Variants',
      options: data.variants.map(d => ({ ...d, groupType: 'variant' })),
    },
    {
      label: 'Studies',
      options: data.studies.map(d => ({ ...d, groupType: 'study' })),
    },
  ];
};

const styles = theme => ({
  root: {
    position: 'relative',
  },
});

function Option(props) {
  switch (props.data.groupType) {
    case 'gene':
      return <OptionContainer {...props}>{props.data.symbol}</OptionContainer>;
    case 'variant':
      return (
        <OptionContainer {...props}>{props.data.variantId}</OptionContainer>
      );
    case 'study':
      return <OptionContainer {...props}>{props.data.studyId}</OptionContainer>;
    default:
      throw Error('Unexpected groupType. Should be gene, variant or study.');
  }
}

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

const SEARCH_QUERY = gql`
  query SearchQuery($queryString: String) {
    search(queryString: $queryString) {
      genes {
        id
        symbol
        name
        synonyms
      }
      variants {
        variantId
        rsId
      }
      studies {
        studyId
        reportedTrait
        pubAuthor
        pubDate
        pubJournal
      }
    }
  }
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleChange(value, { action }) {
    const { history } = this.props;
    if (action === 'select-option') {
      switch (value.groupType) {
        case 'gene':
          history.push(`/gene/${value.id}`);
          break;
        case 'variant':
          history.push(`/variant/${value.variantId}`);
          break;
        case 'study':
          history.push(`/study/${value.studyId}`);
          break;
        default:
          break;
      }
    }
    this.setState({
      value,
    });
  }
  handleInputChange(inputValue) {
    const { client } = this.props;
    return client
      .query({
        query: SEARCH_QUERY,
        variables: { queryString: inputValue },
      })
      .then(response => {
        if (response.data && response.data.search) {
          return asGroupedOptions(response.data.search);
        } else {
          return asGroupedOptions({
            genes: [],
            variants: [],
            studies: [],
          });
        }
      });
  }
  render() {
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
      }),
    };

    return (
      <div className={classes.root}>
        <AsyncSelect
          loadOptions={this.handleInputChange}
          styles={selectStyles}
          components={components}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search for a gene, variant or trait..."
        />
      </div>
    );
  }
}

export default withApollo(
  withRouter(withStyles(styles, { withTheme: true })(Search))
);
