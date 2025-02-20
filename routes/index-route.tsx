import { JSXElement } from "revolution";
import { SitemapRoute } from "../plugins/sitemap.ts";

export function indexRoute(css: string): SitemapRoute<JSXElement> {
  return {
    *handler() {
      return (
        <html lang="en-US" dir="ltr">
          <head>
            <meta charset="UTF-8" />
            <title>Sketch some stuff</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="stylesheet" href={css} />
          </head>
          <body>
            <h1 class="text-3xl font-bold underline">
              Hello World!
            </h1>
          </body>
        </html>
      );
    },
    *routemap(generate) {
      return [{ pathname: generate() }];
    },
  };
}
