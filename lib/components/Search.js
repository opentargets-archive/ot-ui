import React from 'react';
import { withRouter } from 'react-router';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import AsyncSelect from 'react-select/lib/Async';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

const geneOptions = [
  {
    id: 'ENSG00000157764',
    symbol: 'BRAF',
    name: 'B-Raf proto-oncogene, serine/threonine kinase',
    synonyms: [
      'BRAF1',
      'RAFB1',
      'v-Raf murine sarcoma viral oncogene homolog B1',
    ],
  },
  {
    id: 'ENSG00000145335',
    symbol: 'SNCA',
    name: 'synuclein alpha',
    synonyms: [],
  },
].map(d => ({ ...d, groupType: 'gene' }));
const variantOptions = [
  {
    variantId: '1_10247043_A_T',
    rsId: 'rs869449',
  },
  {
    variantId: '5_17399320_C_G',
    rsId: 'rs3758469',
  },
].map(d => ({ ...d, groupType: 'variant' }));
const studyOptions = [
  {
    studyId: 'GCST005806',
    traitReported: 'Blood protein levels',
    pubAuthor: 'Sun BB',
    pubDate: '2018-06-06',
    pubJournal: 'Nature',
  },
  {
    studyId: 'GCST005831',
    traitReported: 'Systemic lupus erythematosus',
    pubAuthor: 'Julia A',
    pubDate: '2018-05-30',
    pubJournal: 'Arthritis Res Ther',
  },
].map(d => ({ ...d, groupType: 'study' }));

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
const groupedOptions = asGroupedOptions({
  genes: geneOptions,
  variants: variantOptions,
  studies: studyOptions,
});

const styles = theme => ({
  root: {
    position: 'relative',
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    marginTop: theme.spacing.unit,
    position: 'absolute',
    width: '100%',
    zIndex: 1005,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  switch (props.data.groupType) {
    case 'gene':
      return (
        <MenuItem
          buttonRef={props.innerRef}
          selected={props.isFocused}
          component="div"
          style={{
            fontWeight: props.isSelected ? 500 : 400,
          }}
          {...props.innerProps}
        >
          {props.data.symbol}
        </MenuItem>
      );
    case 'variant':
      return (
        <MenuItem
          buttonRef={props.innerRef}
          selected={props.isFocused}
          component="div"
          style={{
            fontWeight: props.isSelected ? 500 : 400,
          }}
          {...props.innerProps}
        >
          {props.data.variantId}
        </MenuItem>
      );
    case 'study':
      return (
        <MenuItem
          buttonRef={props.innerRef}
          selected={props.isFocused}
          component="div"
          style={{
            fontWeight: props.isSelected ? 500 : 400,
          }}
          {...props.innerProps}
        >
          {props.data.studyId}
        </MenuItem>
      );
    default:
      throw Error('Unexpected groupType. Should be gene, variant or study.');
  }
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

const DropdownIndicator = ({ inputRef, innerProps }) => {
  return <SearchIcon ref={inputRef} {...innerProps} color="inherit" />;
};

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

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

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
          classes={classes}
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
