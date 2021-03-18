# Monorepo demos (Snowpack/Vite)

Tools used:

- yarn workspaces
- [Snowpack](https://snowpack.dev)
- [Vitejs](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Stitches](https://stitches.dev/)
- [Storybook](https://storybook.js.org/)

## Run the demo

```bash
git clone <repo>
yarn # or `yarn install`
```

### Build the UI Library

```bash
yarn ui build # build the ui library
```

### Run the Snowpack demo

```bash
yarn app dev # run the app in dev mode
```

### Run the UI storybook

```bash
yarn ui storybook # run the app in dev mode
```

### Run the Vite demo

```bash
yarn vite:react dev
```

## Important Notes

- the ui lib is exported as ESModules (checkout the [tsconfig.build.json](./frontend/ui/tsconfig.build.json) file)
- the app is created with the [create-snowpack-app react-typescript template](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/app-template-react-typescript)
- both projects are connected via yarn workspaces
- there's an issue while running a lib like this inside snowpack that are fixed with a hack in the index.html file by adding the next code:

```html
<script>
  global = globalThis //<- this should be enough
</script>
```

- more info about the issue [here](https://github.com/snowpackjs/snowpack/discussions/1085) and [here](https://github.com/webpack/webpack/issues/10035#issuecomment-603231120).

## Acknowledgements

- Kudos to [Kevin](https://twitter.com/elkevinwolf) who is working together in a project using this setup and fix all the issues with me. thanks bro!!
- also thanks to the [Snowpack](https://discord.gg/snowpack) and [Stitches](https://discord.com/invite/H4eG3Mk) community, the support received from those were very important for us!

Any questions please reach out in [twitter!](https://twitter.com/hhg2288)
