import type { MetaFunction } from "@remix-run/node";
import { Frontmatter } from "~/types/Frontmatter";
import { dateLocaleStringOptions } from "~/util/format";

const draftPosts = import.meta.glob("./drafts.*.mdx", {
  eager: true,
}) as Record<
  string,
  {
    frontmatter: Frontmatter;
  }
>;

export const meta: MetaFunction = () => {
  return [
    { title: "ben'z house" },
    { name: "description", content: "ben wilson's personal site" },
  ];
};

export default function Index() {
  function renderRecentPostLinks() {
    return (
      <div className="flex flex-col">
        {Object.entries(draftPosts)
          .map(([key, value]) => {
            const mostRelevantDate =
              value.frontmatter.dateUpdated || value.frontmatter.datePublished;
            return [key, { ...value, mostRelevantDate }] as const;
          })
          .sort(([, valueA], [, valueB]) =>
            valueA.mostRelevantDate > valueB.mostRelevantDate ? -1 : 1
          )
          .map(([key, value]) => {
            // assert non-null because of the glob pattern in the import
            // TODO replace `.` with `/`?
            const slug = key.match(/drafts\.(.+)\.mdx/i)![1];
            const { mostRelevantDate, frontmatter } = value;
            const { title } = frontmatter;
            const shortDate = new Date(mostRelevantDate).toLocaleDateString(
              undefined,
              dateLocaleStringOptions
            );

            return (
              <div key={slug}>
                <span className="my-0">{shortDate}: </span>
                <a href={`/drafts/${slug}`}>{title}</a>
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <div>
      <h2>drafts</h2>

      {renderRecentPostLinks()}
    </div>
  );
}
