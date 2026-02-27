import CardItem from "./CardItem";
import classes from "./CardList.module.css";
import abc from "../../assets/images/abs.jpg";
export default function CardList() {
  return (
    <div className={classes.listContainer}>
      <CardItem
        name="John Doe"
        email="john@example.com"
        location="Kathmandu,Nepal"
        experience="3 Years"
        avatarImg={abc}
        role="Frontend Developer"
      />
      <CardItem
        name="Jane Smith"
        email="jane@example.com"
        location="Pokhara,Nepal"
        experience="5 Years"
        avatarImg={abc}
        role="Backend Developer"
      />
      <CardItem
        name="Alice Johnson"
        email="alice@example.com"
        location="Biratnagar,Nepal"
        experience="2 Years"
        avatarImg={abc}
        role="UI/UX Designer"
      />
      <CardItem
        name="Bob Brown"
        email="bob@example.com"
        location="Dhangadhi,Nepal"
        experience="4 Years"
        avatarImg={abc}
        role="DevOps Engineer"
      />
    </div>
  );
}
