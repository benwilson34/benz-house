import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ben'z house" },
    { name: "description", content: "ben wilson's personal site" },
  ];
};

// TODO more dynamic approach
const POSTS = [
  {
    shortDate: "2024-12-18",
    title: "everyday Git aliases to speed up your workflow",
    slug: "everyday-git-aliases",
  },
  {
    shortDate: "2024-12-17",
    title: "how to make a static blog with Remix and MDX",
    slug: "how-to-make-a-static-blog-with-remix-and-mdx",
  },
];

export default function Index() {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col text-4xl mt-6 mb-6 w-fit border-y border-primary">
          <span className="font-semibold tracking-wider">&quot;yer in</span>

          <div className="relative">
            <div className="absolute top-4 left-0 bg-raised h-16 w-full"></div>
          </div>

          <span className="relative -top-2 font-serif text-8xl text-center -rotate-3 leading-[.8]">
            ben&apos;z house
          </span>

          <div className="flex flex-row">
            <span className="grow"></span>

            <span className="font-semibold tracking-wider">
              now, baby&quot;
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-raised mb-10"></div>

      <p>
        Hi, I&apos;m Ben (he/him)! I&apos;m a full-stack web engineer by trade
        and proud multidisciplinarian. I like video games and music and
        humanity.
      </p>

      <p>
        This is my personal corner of the internet. This is my house. My
        sanctuary. Stay awhile.
      </p>

      <p>
        If you&apos;re a web geek like me, there are details about how this site
        was made on <a href="/about">the about page</a>.
      </p>

      <h2>recent posts</h2>

      <div className="flex flex-col">
        {POSTS.map(({ shortDate, title, slug }) => (
          <div key={slug}>
            <span className="my-0">{shortDate}: </span>
            <a href={`/posts/${slug}`}>{title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
