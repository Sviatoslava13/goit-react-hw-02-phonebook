import s from './ContactList.module.css';
const ContactList = ({ contacts, removeContact }) =>(
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) =>   
 ( <li key={id } className={s.item}>
        <p className={s.text}>{name }:  
       </p> <a className={s.link} href={`tel:${number}`}>{number}</a>
        <button onClick={()=> removeContact(id)} className={s.delete}>Delete</button>
      </li>)
    )}
  </ul>
)

export default ContactList;