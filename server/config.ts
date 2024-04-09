import {
  assertEnv,
  Context,
  type PayloadState,
  resolveMainModule,
} from "./deps.ts";

type State = PayloadState;
export class Ctx extends Context<State> {}
export const isProduction = true;
const localhost = "localhost";
const port = isProduction ? 8080 : 8080;
const https = "https:";
const http = "http:";
const protocol = isProduction ? https : http;
const domain = isProduction ? "zaubrik.de" : "localhost";
const subdomain = "";
export const corsConfig = {
  allowedOrigins: "*",
  allowedMethods: "*",
  allowedHeaders: "Authorization, Content-Type",
};

export const hostname = `${subdomain}.${domain}`;
export const serveOptions = isProduction
  ? {
    port, // cert: await Deno.readTextFile(`${home}/.certs/fullchain.pem`),
    // key: await Deno.readTextFile(`${home}/.certs/key.pem`),
  }
  : { port };

const algorithm = "RS384" as const;
const jwtPort = 8084;
const jwtKeyUrl =
  `${http}//jwt.${localhost}:${jwtPort}/key/${algorithm}/public`;
export const verificationInput = isProduction
  ? { url: jwtKeyUrl, algorithm }
  : { url: jwtKeyUrl, algorithm };
// : { cryptoKey: publicKey, algorithm };
export const audience = ["*"];
export const baseAuthMethodsAndOptions = {
  methods: /^_.+/,
  options: { audience },
};
export const rpcOptions = {
  publicErrorStack: isProduction ? true : true,
};
export const servicesBaseUrl = new URL(
  resolveMainModule("./services/rpc_methods.ts"),
  "file://",
);
