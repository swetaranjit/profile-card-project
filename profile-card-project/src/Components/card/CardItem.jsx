import classes from "./CardItem.module.css";

export default function CardItem(props) {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <img className={classes.avatar} src={props.avatarImg} alt="avatar" />

        <div className={classes.userInfo}>
          <h2 className={classes.name}>{props.name}</h2>
          <p className={classes.role}>{props.role}</p>
        </div>
      </div>
      <div className={classes.details}>
        <div className={classes.detailItem}>
          <span className={classes.label}>Email:</span>
          <span>{props.email}</span>
        </div>
        <div className={classes.detailItem}>
          <span className={classes.label}>Location:</span>
          <span>{props.location}</span>
        </div>
        <div className={classes.detailItem}>
          <span className={classes.label}>Experience:</span>
          <span>{props.experience}</span>
        </div>
      </div>
      <button className={classes.button}>View More</button>
    </div>
  );
}
