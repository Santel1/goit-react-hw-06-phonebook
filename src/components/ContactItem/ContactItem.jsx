import css from './ContactItem.module.css';
export const ContactItem = props => {
  return (
    <div className={css.contactItemContainer}>
      <li className={css.contactItem}>
        <img
          className={css.contactImage}
          src="https://icons.veryicon.com/png/o/education-technology/technology-big-data-visualization/user-149.png"
          alt="user-logo"
        />
        <span className={css.contactItemText}>{props.name}</span>
        <span className={css.contactItemText}>{props.number}</span>
        <button
          onClick={() => props.handleDeleteContacts(props.name)}
          className={css.contactItemBtn}
        >
          Delete
        </button>
      </li>
    </div>
  );
};
