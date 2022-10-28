import s from './Filter.module.css';
const Filter = () => (
  <label className={s.label}>
    Find contcts by name
    <input className={s.input} />
  </label>
);
export default Filter;
