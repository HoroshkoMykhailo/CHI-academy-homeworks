'use client';
import React from "react";
import "~/styles/styles.css";
import { Provider } from "react-redux";
import { store } from "~/store/store";
import { CustomAlert } from "~/components/components";

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exhibits</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body>
        <Provider store={store}>
          {children}
          <CustomAlert />
        </Provider>
      </body>
    </html>
  );
}
