import React from "react";
import Image from "next/image";

import styles from "./ImageContainer.module.scss";

export default function ImageContainer({
  src,
  alt,
  maxWidth,
  maxHeight,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
}) {
  return (
    <div className={styles.ImageContainer} style={{ maxWidth, maxHeight }}>
      <div className={styles.Inner}>
        <Image src={src} alt={alt} fill={true} />
      </div>
    </div>
  );
}
