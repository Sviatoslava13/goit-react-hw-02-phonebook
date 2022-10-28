import s from './ContactList.module.css';
const ContactList = ({ contacts, removeTodo}) =>   (

  <ul className={s.list}>
{contacts.map(({ id, name, number }) => (
  <li key={id } className={s.item}>
        <p className={s.text}>{name }:
        <a className={s.link} href={`tel:${number}`}>{number}</a></p>
        <button onClick={()=> removeTodo(id)} className={s.delete}>Delete</button>
      </li>)
    )}
  </ul>
);
export default ContactList;
