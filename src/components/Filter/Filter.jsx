import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <input
    className={s.Input}
    type="text"
    placeholder="Find contacts by name"
    value={filter}
    onChange={onChange}
  />
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
