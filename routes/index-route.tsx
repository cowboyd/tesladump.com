import { JSXChild, JSXElement } from "revolution";
import { SitemapRoute } from "../plugins/sitemap.ts";

export function indexRoute(): SitemapRoute<JSXElement> {
  return {
    *handler() {
      return (
        <html lang="en-US" dir="ltr">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="description"
              content="Tesla owners don't want to support Elon Musk's hostile takeover of the American Government. Help them do the right thing"
            />
            <title>Tesla Dump: Unstain yourself</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </head>
          <body>
            <p class="p-8 text-xl text-center">
              We bought in to the EV revolution, not a billionaire's personal
              takeover of the United States government.
            </p>
            <p class="px-8 text-xl text-center">
              Tesla Dump helps owners offload their Teslas and buy a new car
              without having to bear the brunt of the cost
            </p>
            <section class="flex flex-col justify-evenly sm:flex-row pt-10">
              <Card href="owners">
                I am a Tesla owner.
              </Card>
              <Card href="concerned">
                I want to help a Tesla owner do the right thing
              </Card>
            </section>
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
