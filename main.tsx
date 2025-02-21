import { main, suspend } from "effection";
import { createRevolution } from "revolution";
import { tailwindPlugin } from "./plugins/tailwind.ts";
import { indexRoute } from "./routes/index-route.tsx";
import { autoreloadPlugin } from "./plugins/autoreload.tsx";
import { currentRequestPlugin } from "./plugins/current-request.ts";
import { route, sitemapPlugin } from "./plugins/sitemap.ts";
import { forOwnersRoute } from "./routes/for-owners-route.tsx";

await main(function* (args) {
  let revolution = createRevolution({
    app: [
      route("/", indexRoute()),
      route("/for-owners", forOwnersRoute()),
    ],
    plugins: [
      currentRequestPlugin(),
      sitemapPlugin(),
      yield* tailwindPlugin({ input: "main.css", outdir: "twind" }),
      yield* autoreloadPlugin({ enabled: !!args.find((a) => a === "--dev") }),
    ],
  });

  let server = yield* revolution.start();
  console.log(`www -> http://localhost:${server.port}`);

  yield* suspend();
});
