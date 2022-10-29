import s from './Filter.module.css';
const Filter = ({handleChange, filter}) => (
  <label className={s.label}>
    Find contcts by name
    <input className={s.input} name="filter" value={filter} onChange={handleChange}/>
  </label>
);
export default Filter;
