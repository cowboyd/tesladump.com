import { JSXChild, JSXElement } from "revolution";
import { SitemapRoute } from "../plugins/sitemap.ts";

export function ownersRoute(): SitemapRoute<JSXElement> {
  return {
    *handler() {
      return (
        <html lang="en-US" dir="ltr">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="description"
              content="Tesla Owners: this is not what I bought into"
            />
            <title>Tesla Dump: Help me offload my Tesla at a great price</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </head>
          <body>
            <article class="prose mx-auto">
              <section>
                <h2>This isn't what I signed up for</h2>
                <p>
                  There are lots of great reasons to own a Telsa: Technology.
                  Performance. Zero emissions.... However,{"  "}
                  <em>
                    supporting a billionaire's bid to take over the US
                    government
                  </em>{"   "}
                  was never one of them.
                </p>

                <p>
                  Nobody asked Elon to turn your car into a political statement,
                  but that's exactly what he did anyway. Now, every time you
                  drive anywhere, you get lots of unwanted attention because
                  he's turned your vehicle into a billboard for his crazy brand
                  of politics. Who needs that?
                </p>
              </section>
              <section>
                <h2>But I can't just sell my car.</h2>
                <p>
                  A Billionaire can replace his car as easily as he can change
                  his socks. For the rest of us, not so much. We have busy
                  lives. We have car payments. And with the resale value of
                  Teslas falling off of a cliff, we can't just afford to take a
                  loss that could easily stretch into the tens of thousands of
                  dollars.
                </p>
              </section>
              <section>
                <h2>Tesla Dump can help</h2>
                <p>
                  We understand that it wasn't your choice to have all this
                  dropped onto your shoulders. That's why Tesla Dump raises
                  money to help oweners like you drop Elon's baggage, get into a
                  new car, and get on with their lives. We'll get you a fair
                  price near the resale value you <em>expected</em>{" "}
                  your Tesla to retain when you bought it... not after Elon
                  involved you in all this.
                </p>
              </section>

              <section>
                <p>
                  <Card href="signup">Sign me up</Card>
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
