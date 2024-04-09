import {
  compose,
  createAllRoute,
  createDeleteRoute,
  createGetRoute,
  createPostRoute,
  createPutRoute,
  enableCors,
  resolveMainModule,
  serveStatic,
} from "./deps.ts";
import {
  baseAuthMethodsAndOptions,
  corsConfig,
  Ctx,
  rpcOptions,
  servicesBaseUrl,
  verificationInput,
} from "./config.ts";
import { rpcRespond } from "./services/rpc.ts";
import {
  createFile,
  deleteFile,
  readFile,
  updateFile,
} from "./services/storage.ts";

const serveStaticFilesPattern = {
  hostname: "*",
  pathname: `/((?!rpc/.*$)(?!storage/.*$).*)`,
};

const rpcPattern = {
  hostname: "*",
  pathname: `/rpc`,
};

const storagePattern = {
  hostname: "*",
  pathname: `/storage`,
};

export const corsRoute = createAllRoute({ pathname: "*" })(
  enableCors(corsConfig),
);

export const serveStaticFilesRoute = createGetRoute(serveStaticFilesPattern)(
  serveStatic(),
);

export const rpcRoute = createPostRoute(rpcPattern)(
  rpcRespond(
    servicesBaseUrl,
    verificationInput,
    baseAuthMethodsAndOptions,
    rpcOptions,
  ),
);

export const createFileRoute = createPostRoute(storagePattern)<Ctx>(
  createFile(resolveMainModule("./storage/")),
);

export const readFileRoute = createGetRoute(storagePattern)<Ctx>(
  readFile(resolveMainModule("./storage/")),
);

export const updateFileRoute = createPutRoute(storagePattern)<Ctx>(
  updateFile(resolveMainModule("./storage/")),
);

export const deleteFileRoute = createDeleteRoute(storagePattern)<Ctx>(
  deleteFile(resolveMainModule("./storage/")),
);
