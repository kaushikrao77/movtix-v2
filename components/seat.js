import styles from "./seat.module.css";

export default function Seat(props) {
  let cn = "";
  if (!props.disabled) {
    if (props.selected) {
      cn = `${styles.seat} ${styles.yellow}`;
    } else {
      cn = `${styles.seat} ${styles.white}`;
    }
  } else {
    cn = `${styles.disabled} ${styles.seat}`;
  }
  return (
    <div
      className={cn}
      onClick={() => {
        props.toggleSeat(props.id);
      }}
    >
      <div></div>
    </div>
  );
}
