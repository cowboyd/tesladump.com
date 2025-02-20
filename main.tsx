import { main, suspend } from "effection";
import { createRevolution } from "revolution";
import { useTailwind } from "./plugins/tailwind.ts";
import { indexRoute } from "./routes/index-route.tsx";
import { assetRoute } from "./plugins/asset-route.ts";
import { autoreloadPlugin } from "./plugins/autoreload.tsx";
import { currentRequestPlugin } from "./plugins/current-request.ts";
import { sitemapPlugin, route } from "./plugins/sitemap.ts";

await main(function* () {
  let css = yield* useTailwind({ input: "main.css", outdir: "build" });

  let revolution = createRevolution({
    app: [
      route("/", indexRoute(css)),
      route("/build(.*)", assetRoute("build")),
    ],
    plugins: [
      currentRequestPlugin(),
      sitemapPlugin(),
      yield* autoreloadPlugin(),
      
    ],
  });

  let server = yield* revolution.start();
  console.log(`www -> http://localhost:${server.port}`);

  yield* suspend();
});
