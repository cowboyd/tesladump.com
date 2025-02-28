import { JSXChild, JSXElement } from "revolution";
import { SitemapRoute } from "../plugins/sitemap.ts";

export function volunteersRoute(): SitemapRoute<JSXElement> {
  return {
    *handler() {
      return (
        <html lang="en-US" dir="ltr">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="description"
              content="Tesla Dump: We need your help!"
            />
            <title>Tesla Dump: We need your help</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </head>
          <body>
            <article class="prose">
              <section>
		<h1>You can help rid the earth of Teslas</h1>
		Chance to have a real impact.
              </section>
              <section>
                <h2>How can I help?</h2>
                <p>
                  <ul>
                    <li>Buy great stuff</li>
                    <li>Spread the word!</li>
                    <li>Donate Money</li>
                  </ul>
                </p>
              </section>
            </article>
          </body>
        </html>
      );
    },
    *routemap(generate) {
      return [{ pathname: generate() }];
    },
  };
}

function Card(
  props: { children: JSXChild | JSXChild[]; href: string },
): JSXElement {
  return (
    <a
      class="border p-8 rounded-lg text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      href={props.href}
    >
      {props.children}
    </a>
  );
}
