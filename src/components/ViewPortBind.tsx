import React from "react";

import styles from "./ViewPortBind.module.scss";

export default function ViewPortBind({
  children,
  first,
}: {
  children: React.ReactNode;
  first: boolean;
}) {
  return <div className={styles.ViewPortBind}>{children}</div>;
}
