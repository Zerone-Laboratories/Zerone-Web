import React from "react";
import Link from "next/link";
import ImageContainer from "./ImageContainer";
import { MdKeyboardArrowRight } from "react-icons/md";

import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  children?: React.ReactNode;
}

export default function Card(props: CardProps) {
  const { title, description, link, image } = props;

  const children = props.children ? (
    props.children
  ) : (
    <div className={styles.CardContent}>
      <h3>{title}</h3>
      <p>{description}</p>

      <Link href={link}>
        <span>
          <label>Learn More</label>
          <MdKeyboardArrowRight />
        </span>
      </Link>
    </div>
  );

  return (
    <div className={styles.CardOuter}>
      <div className={styles.Card}>
        <div className={styles.CardImage}>
          <ImageContainer src={image} alt={title} />
        </div>

        {children}
      </div>
    </div>
  );
}
