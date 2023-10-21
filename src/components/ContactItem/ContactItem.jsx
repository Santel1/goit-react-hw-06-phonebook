import css from './ContactItem.module.css';
export const ContactItem = ({ name, number, handleDeleteContacts }) => {
  return (
    <div className={css.contactItemContainer}>
      <li className={css.contactItem}>
        <img
          className={css.contactImage}
          src="https://icons.veryicon.com/png/o/education-technology/technology-big-data-visualization/user-149.png"
          alt="user-logo"
        />
        <span className={css.contactItemText}>{name}</span>
        <span className={css.contactItemText}>{number}</span>
        <button
          onClick={() => handleDeleteContacts(name)}
          className={css.contactItemBtn}
        >
          Delete
        </button>
      </li>
    </div>
  );
};
