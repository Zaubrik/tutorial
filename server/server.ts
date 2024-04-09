import { serveOptions } from "./config.ts";
import { handler } from "./handler.ts";
import { serveOptions as jwtServeOptions } from "https://dev.zaubrik.com/jwt@v0.0.4/config.ts";
import { handler as jwtHandler } from "https://dev.zaubrik.com/jwt@v0.0.4/handler.ts";

Deno.serve(serveOptions, handler);
Deno.serve(jwtServeOptions, jwtHandler);
