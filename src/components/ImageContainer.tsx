import React from "react";
import Image from "next/image";

import styles from "./ImageContainer.module.scss";

export default function imageContainer({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className={styles.ImageContainer}>
      <div className={styles.Inner}>
        <Image src={src} alt={alt} fill={true} />
      </div>
    </div>
  );
}
