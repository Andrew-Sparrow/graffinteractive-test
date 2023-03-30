import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const styles = {
  control: (baseStyles, state) => {
    // console.log(baseStyles);
    return {
      ...baseStyles,
      borderColor: state.isFocused ? '#BC75FF' : '',
      backgroundColor: '#393C46',
    }
  },
  container: (baseStyles, state) => {
    // console.log(baseStyles);
    return {
      ...baseStyles,
      borderColor: state.isFocused ? '#BC75FF' : '',
    }
  },
  input: (baseStyles, state) => {
    // console.log(baseStyles);
    return {
      ...baseStyles,
      color: '#F2F2F2',
    }
  },
  menu: (baseStyles, state) => {
    // console.log(baseStyles);
    return {
      ...baseStyles,
      color: '#F2F2F2',
      backgroundColor: '#393C46',
    }
  },
  menuList: (baseStyles, state) => {
    // console.log(baseStyles);
    return {
      ...baseStyles,
    }
  },
  option: (baseStyles, state) => {
    // console.log(baseStyles);
    return {
      ...baseStyles,
    }
  },
  indicatorSeparator: (baseStyles, state) => {
    // console.log(baseStyles);
    return {
      ...baseStyles,
      width: 0,
    }
  },
  singleValue: (baseStyles, state) => {
    // console.log(baseStyles);
    return {
      ...baseStyles,
      color: '#F2F2F2',
    }
  },
  valueContainer: (baseStyles, state) => {
    // console.log(baseStyles);
    return {
      ...baseStyles,
      color: '#F2F2F2',
    }
  },
};

const FilterSelect = () => (
  <Select
    options={options}
    styles={styles}
    theme={(theme) => {
      // console.log(theme);
      return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: '#4f5463',
        primary: '#2d3039',
      },
    }}}
  />
)

export { FilterSelect };
