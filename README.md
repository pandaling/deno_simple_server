# deno_simple_server
A simple server created with Deno

Install Deno if not yet installed
- windows (with powershell) - `iwr https://deno.land/x/install/install.ps1 -useb | iex`

Run the code with the command below:
- `deno run --allow-net --allow-env oak-server.ts`

Sample route:
1. `http://127.0.0.1/users` - GET
2. `http://127.0.0.1/user/{user name}` - GET
