import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// TODO more dynamic approach
// const POSTS = [
//   {
//     title: "ASCII art in React.js",
//     slug: "/posts/ascii-art-in-remix",
//   },
//   {
//     title: "Markdown test",
//     slug: "/posts/test-post",
//   },
// ];

export default function Index() {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col text-6xl mb-6 w-fit border-y border-primary">
          <span className="font-semibold tracking-wider">&quot;yer in</span>
          <span className="font-serif text-8xl -rotate-2">
            ben&apos;s house
          </span>
          <div className="flex flex-row">
            <span className="grow"></span>
            <span className="font-semibold tracking-wider">
              now, baby&quot;
            </span>
          </div>
        </div>
      </div>

      <p>
        Hi, I&apos;m Ben (he/him)! I&apos;m a full-stack web engineer by trade
        and proud multidisciplinarian otherwise. I like video games and music
        and humanity.
      </p>

      <p>
        This is my personal corner of the internet. I make the rules here. This
        is my house. My sanctuary. Stay awhile.
      </p>

      <p>
        Use the links in the sidebar to check out{" "}
        <Link to="/projects">what I&apos;ve been working on</Link>,{" "}
        <a
          href="../WilsonBenjamin_Resume_2024-10-21_WebAppFocus.pdf"
          download="WilsonBenjamin_Resume_2024-10-28.pdf"
        >
          my résumé
        </a>
        , and my socials.
      </p>

      {/* <p>TODO blog posts</p> */}

      <p>
        If you&apos;re a web geek like me, there are details about how this site
        was made on <Link to="/about">the about page</Link>.
      </p>

      {/* <ul>
        {POSTS.map(({ title, slug }) => (
          <li key={slug}>
            <Link to={slug}>{title}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
