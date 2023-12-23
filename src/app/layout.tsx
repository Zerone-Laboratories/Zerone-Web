"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";

import NavBar from "./NavBar";

import "./layout.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode[];
}) {
  return (
    <html lang="en">
      <Head>
        <title>Zerone Laborotories</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body>
        <NavBar>
          <NavBar.Item>
            <Link href="/">Home</Link>
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

        {children}
      </body>
    </html>
  );
}
