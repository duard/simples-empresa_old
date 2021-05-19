```
nx generate library assets --directory=shared --tags="scope:shared,type:assets" --style=scss
echo "# shared-assets" > ./libs/shared/assets/README.md
npx mkdirp ./libs/shared/assets/src/assets/fonts ./libs/shared/assets/src/assets/icons ./libs/shared/assets/src/assets/images
echo "" > ./libs/shared/assets/src/assets/fonts/.gitkeep
echo "" > ./libs/shared/assets/src/assets/icons/.gitkeep
echo "" > ./libs/shared/assets/src/assets/images/.gitkeep
mv ./apps/roma-app/src/favicon.ico ./libs/shared/assets/src

nx generate library styles --directory=shared --tags="scope:shared,type:styles" --style=scss
npx rimraf ./libs/shared/styles/*.js ./libs/shared/styles/*.json ./libs/shared/styles/src/*.* ./libs/shared/styles/src/lib/*.*
echo "# shared-styles" > ./libs/shared/styles/README.md

nx generate library environments --directory=shared --tags="scope:shared,type:environments" --style=scss
npx rimraf ./libs/shared/environments/src/lib/*.*
mv ./apps/roma-app/src/environments/*.* ./libs/shared/environments/src/lib
echo "export * from './lib/environment';" > ./libs/shared/environments/src/index.ts
npx rimraf ./apps/roma-app/src/environments
```
