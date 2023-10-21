import css from './Title.module.css';
export const Title = ({ title }) => {
  return (
    <div className={css.titleContainer}>
      <span className={css.title}>{title}</span>
    </div>
  );
};
