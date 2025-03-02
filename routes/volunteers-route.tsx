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
            <article class="prose container mx-auto">
              <section>
                <h1>
                  Throwing money at Democrats is a waste of time. This isn’t.
                </h1>
                <h2>
                  If every time hearing about Elon or seeing a Tesla makes you
                  mad, <em>do something</em>.
                </h2>
                <p>
                  Yes money helps, but the way to make a difference is to couple
                  it with action and engagement. That’s why we’re asking not
                  only for your donations, but also your involvement. We need
                  {" "}
                  <em>you</em> to [make this work](./how-it-works)
                </p>
                <p>
                  together <em>we</em>{" "}
                  can show Elon that our democracy is not for sale. Not even to
                  him.
                </p>
              </section>
              <section>
                <h2>
                  It’s going to take a lot of time and money, but here's how we
                  do it (and have fun at the same time):
                </h2>
                <p>
                  <ul>
                    <li>Buy cool stuff and spread the message</li>
                    <li>
                      Sign up for our mailing list to keep current with how it's
                      going
                    </li>
                    <li>
                      Donate critical funds to take Teslas off the streets
                    </li>
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
