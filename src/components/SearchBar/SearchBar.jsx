import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { SelectForm } from './SelectForm';
import { breakpoints } from 'styleConfig/breakpoints';
import { SelectFilter } from './SelectFilter';
import { CenteredBox } from 'components/ui/Containers';


export const SearchBar = ({
  onSearch,
  onSelectChange,
  onSelectFilter,
  type,
}) => {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.currentTarget.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search your favorite"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
        />
        <SearchButton type="submit">
          <GoSearch />
        </SearchButton>
      </SearchForm>
      <Box>
        <SelectFilter onChange={e => onSelectFilter(e)} />
        {!type && <SelectForm onChange={e => onSelectChange(e)} />}
      </Box>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  type: PropTypes.string,
  handleChange: PropTypes.func,
  onSelectFilter: PropTypes.func,
  onSelectChange: PropTypes.func,
};

const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 265px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;
const SearchInput = styled.input`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40px;
  font-size: ${p => p.theme.fontSizes.l};
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[0]}px;
  &::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    @media (${breakpoints.tablet}) {
      font-size: ${p => p.theme.fontSizes.m};
    }
  }
`;
const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  opacity: 0.7;
  background: ${p => p.theme.colors.white};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  svg {
    width: 20px;
    height: 20px;
  }
  &:hover {
    opacity: 1;
  }
`;
const Wrapper = styled(CenteredBox)`
flex-direction: column;
  @media (${breakpoints.tablet}) {
    justify-content: space-between;
    flex-direction: row;
  }
`;
const Box = styled(CenteredBox)`
  @media (max-width: 767px) {
    margin-top: ${p => p.theme.space[3]}px;
  }
  width: 100%;
  justify-content: space-between;
`;
