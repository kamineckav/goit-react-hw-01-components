import css from './User.module.css';
import PropTypes from 'prop-types';

const User = ({ items }) => {
  return (
    <>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={items.avatar} alt="User avatar" className={css.avatar} />
          <p className={css.username}>{items.username}</p>
          <p className={css.tag}>@{items.tag}</p>
          <p className={css.location}>{items.location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.statsItem}>
            <span className={css.label}>Followers:</span>
            <span className={css.quantity}>{items.stats.followers}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Views:</span>
            <span className={css.quantity}>{items.stats.views}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Likes:</span>
            <span className={css.quantity}>{items.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

User.defaultProps = {
  items: {},
};

User.propTypes = {
  items: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

export default User;
