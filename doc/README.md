# Documentation [New]

## Development

Tech stack/prequisites:
- PHP
- Node.js 14.16.1
- Yarn 1.22.17


### How to run/develop locally with asdf+shell

With [asdf](https://github.com/asdf-vm/asdf), on a shell you can run:
```sh
# Clone project
git clone git@github.com:Letsqube/letsqube.com.git

# Enter project folder
cd letsqube.com

# Install prequisites
asdf install
composer install
yarn

# set config
cp .env.dev .env

# Run db in a tab
docker-compose up

# If it's your first time, populate DB

# Run backend in a tab
php -S 0.0.0.0:8080 -t public
# Run frontend in a tab
yarn start
```

### Troubleshooting
When running `asdf install` if you see a problem with a package not found and it fails PHP installation, you should install these packages (example for arch linux):
```sh
pacman -S --needed re2c oniguruma libzip
```

When starting react `yarn start` if you see a problem such as `Cannot find module 'node-libs-browser/mock/empty'`, run these:
```sh
yarn cache clean
rm -rf node_modules
yarn
```

## Tests
You can run automated frontend tests by running
```sh
yarn test
```
