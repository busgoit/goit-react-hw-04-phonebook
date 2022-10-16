import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { StyledFilter, FilterLabel, FilterInput } from './Filter.styled';

const filterId = nanoid();

const Filter = ({ value, onChange }) => {
  return (
    <StyledFilter>
      <FilterLabel htmlFor={filterId}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id={filterId}
        value={value}
        onChange={onChange}
        placeholder="Enter name"
        required
      />
    </StyledFilter>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
