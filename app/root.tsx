import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import asciiArtLogoString from "./ascii-art-logo.txt?raw";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="flex flex-row w-full h-screen max-h-screen p-4 bg-background text-primary tracking-wider">
      <div className="h-full flex flex-col justify-center mr-4">
        <div className="h-fit grow-0 border-primary border rounded-xl my-4 px-2 pt-2 -rotate-2">
          <div className="w-full flex flex-row justify-center">
            <pre className="ascii-art">{asciiArtLogoString}</pre>
          </div>

          <h1 className="text-nowrap text-4xl mt-4 mb-1 mr-1">
            <Link to="/" className="no-underline">
              ben&apos;z house
            </Link>
          </h1>

          <p className="text-center">full-stack web dev and more</p>

          <ul>
            {/* <li>
              <Link to="/opinions">opinions</Link>
            </li> */}
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <a
                href="../WilsonBenjamin_Resume_2024-10-21_WebAppFocus.pdf"
                download="WilsonBenjamin_Resume_2024-10-28.pdf"
              >
                résumé
              </a>
              <span className="bg-primary ml-2 px-2 text-background rounded-lg font-semibold">
                hire me!!
              </span>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/benwilson34/">linkedin</a>
            </li>
            <li>
              <a href="https://github.com/benwilson34">github</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grow flex justify-center overflow-auto">
        <div className="mdx-content px-4 max-w-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
