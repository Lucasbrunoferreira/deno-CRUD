echo 'Formating files...'
deno fmt src/*

echo 'Running server...'
deno run --allow-net --allow-read --allow-write --allow-env src/index.ts
