import { JSXElement } from "revolution";
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
            <title>Tesla Buyback</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
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
