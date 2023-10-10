# tutorial

A tutorial for Zaubrik's Web Components

1. Install
   [deno](https://docs.deno.com/runtime/manual/getting_started/installation)
2. Go to the static directory, `cd static/`
3. Start a static file server:

```bash
deno run -A https://deno.land/std/http/file_server.ts --port "${1:-8088}" ./
```

4. Open your browser and enter `http://localhost:8888/`.
