import s from './ContactForm.module.css';
const ContactForm = ({handleSubmit, handleChange, number, name}) => (
  <form className={s.form} onSubmit={handleSubmit}>
    <label className={s.label}>
      Name
      <input
        className={s.input}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
    </label>

    <label className={s.label}>
      Number
      <input
        className={s.input}
        type="tel"
        name="number"
          value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
             onChange={handleChange}
      />
    </label>
    <button className={s.submit} type="submit">
      Add contact
    </button>
  </form>
);
export default ContactForm;
