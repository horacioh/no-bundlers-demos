# Snowpack + Typescript UI Library demo

Tools used:

- yarn workspaces
- [Snowpack](https://snowpack.dev)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Stitches](https://stitches.dev/)
- [Storybook](https://storybook.js.org/)

## Run the demo

```bash
git clone <repo>
yarn # or `yarn install`
yarn ui build # build the ui library
yarn app dev # run the app in dev mode
yarn ui storybook # run storybook
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

- Kudos to [Kevin](https://twitter.com/elkevinwolf) who is working with me in a project with this setup and fought with me to fix all the issues. thanks bro!!
- also thanks to the Snowpack and Stitches community, the support received from those were very important for us!

Any questions please reach out in [twitter!](https://twitter.com/hhg2288)
