'use client';

import { Header } from "./Header/Header";
import { Footer } from "./Footer";

export function Layout({ locales, settings, children }) { /* navigation */
  return (
    <div>
      <Header locales={locales} settings={settings} /> {/* navigation={navigation}  */}
      <main>{children}</main>
      <Footer settings={settings} />
    </div>
  );
}