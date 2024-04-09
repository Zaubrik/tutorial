import {
  type Context,
  type CryptoKeyOrUpdateInput,
  type Methods,
  type Options,
  respondWithAuth,
} from "../deps.ts";

export function rpcRespond(
  servicesBaseUrl: URL,
  verificationInput: CryptoKeyOrUpdateInput,
  baseAuthMethodsAndOptions: { methods: (keyof Methods)[] | RegExp },
  rpcOptions: Options = {},
) {
  const getRpcResponse = respondWithAuth(verificationInput);
  return async <C extends Context>(ctx: C) => {
    const methods = { ...await import(servicesBaseUrl.pathname) };
    ctx.response = await getRpcResponse(
      methods,
      baseAuthMethodsAndOptions,
      rpcOptions,
    )(ctx.request);
    return ctx;
  };
}
