import { createHandler, fallBack, logger } from "./deps.ts";
import { Ctx, hostname } from "./config.ts";
import {
  corsRoute,
  createFileRoute,
  deleteFileRoute,
  readFileRoute,
  rpcRoute,
  serveStaticFilesRoute,
  updateFileRoute,
} from "./routes.ts";

export const handler = createHandler(Ctx)(
  serveStaticFilesRoute,
  rpcRoute,
  createFileRoute,
  deleteFileRoute,
  updateFileRoute,
  readFileRoute,
)(
  fallBack,
)(
  logger(hostname, { debug: true }),
  corsRoute,
);
