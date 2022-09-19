import PropTypes from 'prop-types';
import Select from 'react-select';
import styled from 'styled-components';
import { optionsPerPage } from 'helpers';
import { CenteredBox } from 'components/ui/Containers';

export const SelectForm = ({ onChange }) => {
  return (
    <CenteredBox>
      <SelectTitle>per page</SelectTitle>
      <Select
        options={optionsPerPage}
        defaultValue={optionsPerPage[0]}
        value={optionsPerPage.value}
        onChange={onChange}
        styles={customStyles}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#bee2e9',
            primary: '#eead71',
            neutral0: '#fff',
            neutral30: '#fff',
            neutral20: 'rgb(98,163,138)',
          },
        })}
      />
    </CenteredBox>
  );
};

SelectForm.propTypes = {
  onChange: PropTypes.func,
};


const SelectTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  margin: 0 ${p => p.theme.space[0]}px;
`;

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: 40,
    color: '#000',
    backgroundColor: '#fff',
  }),
  indicatorSeparator: () => ({
    color: 'rgb(98,163,138)',
  }),
  singleValue: (provided, state) => {
    const color = '#000';
    const opacity = state.isDisabled ? 0.8 : 1;
    const transition = 'opacity 300ms';
    return { ...provided, opacity, transition, color };
  },
  control: styles => ({ ...styles, borderWidth: 0, fontSize: 16 }),
  valueContainer: styles => ({ ...styles, padding: 0 }),
  indicatorsContainer: styles => ({ ...styles, padding: 0, width: 30 }),
};
