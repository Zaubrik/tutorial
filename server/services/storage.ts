import {
  Context,
  createHttpError,
  existsSync,
  getGroup,
  getRecursiveFilepaths,
  isArray,
  isHttpError,
  isString,
  join,
  type PayloadState,
  securePath,
  serveStatic,
  Status,
  ulid,
} from "../deps.ts";

export function createFile(containerPath: string) {
  if (
    !existsSync(containerPath, { isReadable: true, isDirectory: true })
  ) {
    throw new Error(`The container directory does not exist.`);
  }
  return async <C extends Context<PayloadState>>(ctx: C): Promise<C> => {
    try {
      const formData = await ctx.request.formData();
      console.log("containerPath:", containerPath);
      // deno-lint-ignore no-explicit-any
      const urls: string[] = [];
      for (const [fileDirectory, file] of formData.entries() as any) {
        if (file instanceof Blob) {
          const directory = join(
            securePath(containerPath)(join("./", fileDirectory)),
            "/",
          );
          const uuid = ulid();
          console.log(fileDirectory);
          console.log(file);
          const filename = `${
            file instanceof File ? file.name : "blob"
          } -${uuid}`;
          const path = securePath(directory)(join("./", filename));
          await Deno.mkdir(directory, { recursive: true });
          const destFile = await Deno.open(path, {
            create: true,
            write: true,
            truncate: true,
          });
          await file.stream().pipeTo(destFile.writable);
          urls.push(path);
        } else {
          throw new Error(`The FormData value must be a Blob object.`);
        }
      }
      console.log("aaaaaaaaaaa urls:", urls);
      ctx.response = Response.json({ urls });
      return ctx;
    } catch (error) {
      console.log("error:", error);
      throw isHttpError(error)
        ? error
        : createHttpError(Status.BadRequest, error.message);
    }
  };
}

export function readFile(
  containerPath: string,
) {
  return async <C extends Context<PayloadState>>(ctx: C): Promise<C> => {
    return await serveStatic(containerPath)(ctx);
  };
}

export function updateFile(
  containerPath: string,
) {
  return async <C extends Context<PayloadState>>(ctx: C): Promise<C> => {
    try {
      const formData = await ctx.request.formData();
      console.log("containerPath:", containerPath);
      if (
        existsSync(containerPath, { isReadable: true, isDirectory: true })
      ) {
        // deno-lint-ignore no-explicit-any
        const urls = [];
        for (const [fileDirectory, file] of formData.entries() as any) {
          if (file instanceof Blob) {
            const directory = join(
              securePath(containerPath)(join("./", fileDirectory)),
              "/",
            );
            const uuid = ulid();
            console.log(fileDirectory);
            console.log(file);
            const filename = `${
              file instanceof File ? file.name : "blob"
            } -${uuid}`;
            const path = securePath(directory)(join("./", filename));
            await Deno.mkdir(directory, { recursive: true });
            const destFile = await Deno.open(path, {
              create: true,
              write: true,
              truncate: true,
            });
            await file.stream().pipeTo(destFile.writable);
            urls.push(path);
          } else {
            throw new Error(`The FormData value must be a Blob object.`);
          }
        }
        console.log("aaaaaaaaaaa urls:", urls);
        ctx.response = Response.json({ urls });
        return ctx;
      } else {
        throw new Error(`The container directory does not exist.`);
      }
    } catch (error) {
      console.log("error:", error);
      throw isHttpError(error)
        ? error
        : createHttpError(Status.BadRequest, error.message);
    }
  };
}

export function deleteFile(
  containerPath: string,
) {
  if (
    !existsSync(containerPath, { isReadable: true, isDirectory: true })
  ) {
    throw new Error(`The container directory does not exist.`);
  }
  return async <C extends Context<PayloadState>>(ctx: C): Promise<C> => {
    try {
      const { filepath } = await ctx.request.json();
      // deno-lint-ignore no-explicit-any
      await Promise.all(
        [filepath].flat().map(async (path) =>
          await Deno.remove(
            join(
              securePath(containerPath)(join("./", filepath)),
              "/",
            ),
          )
        ),
      );
      ctx.response = new Response();
      return ctx;
    } catch (error) {
      console.log("error:", error);
      throw isHttpError(error)
        ? error
        : createHttpError(Status.BadRequest, error.message);
    }
  };
}
