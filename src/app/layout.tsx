import React from "react";
import Link from "next/link";

import NavBar from "./NavBar";
import ViewPortBind from "@/components/ViewPortBind";

import "./layout.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nav = (
    <NavBar>
      <NavBar.Item>
        <Link href="/">
          <h1>Zerone Labs</h1>
        </Link>
      </NavBar.Item>

      <NavBar.Item>
        <Link href="/#projects">Projects</Link>
      </NavBar.Item>
      <NavBar.Item>
        <Link href="/#team">Team</Link>
      </NavBar.Item>

      <NavBar.Item>
        <Link href="/#contact">Contact</Link>
      </NavBar.Item>
    </NavBar>
  );

  return (
    <html lang="en">
      <body>
        {React.Children.map(children, (child, i) => (
          <ViewPortBind first={i === 0}>
            {i === 0 ? nav : null}
            {child}
          </ViewPortBind>
        ))}
      </body>
    </html>
  );
}
