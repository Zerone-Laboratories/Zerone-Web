import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import styles from "./ScrollDownIndicator.module.scss";

export default function ScrollDownIndicator() {
  return (
    <div className={styles.ScrollDownIndicator}>
      <MdOutlineKeyboardArrowDown />
    </div>
  );
}
