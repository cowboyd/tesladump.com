import type { RevolutionPlugin } from "revolution";
import { createContext, type Operation } from "effection";
import { posixNormalize } from "https://deno.land/std@0.203.0/path/_normalize.ts";

const CurrentRequestContext =  createContext<Request>("current.request");

const BaseUrl = createContext<URL>("baseUrl");

export function currentRequestPlugin(): RevolutionPlugin {
  return {
    *http(request, next) {
      yield* CurrentRequestContext.set(request);

      let rebaseUrl = request.headers.get("X-Base-Url") ?? void 0;
      if (rebaseUrl) {
        yield* BaseUrl.set(new URL(rebaseUrl));
      } else {
        let url = new URL(request.url);
        url.pathname = "/";
        yield* BaseUrl.set(url);
      }

      return yield* next(request);
    }
  };
}

/**
 * Convert a non fully qualified url into a fully qualified url, complete
 * with protocol.
 */
export function* useAbsoluteUrl(path: string): Operation<string> {
  let absolute = yield* useAbsoluteUrlFactory();
  return absolute(path);
}

export function* useAbsoluteUrlFactory(): Operation<(path: string) => string> {
  let base = yield* BaseUrl.expect();
  let request = yield* CurrentRequestContext.expect();

  return (path) => {
    let normalizedPath = posixNormalize(path);
    if (normalizedPath.startsWith("/")) {
      let url = new URL(base);
      url.pathname = posixNormalize(`${base.pathname}${path}`);
      return url.toString();
    } else {
      return new URL(path, request.url).toString();
    }
  };
}
