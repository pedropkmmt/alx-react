# 0x06. React Immutable

`Front-end` `JavaScript` `ES6` `React`

|By: Johann Kerbrat, Engineering Manager at Uber Works|
|:--|
|Weight: 1|
|Project will start Feb 14, 2023 6:00 AM, must end by Feb 17, 2023 6:00 AM|
|Checker was released at Feb 15, 2023 12:00 AM|
|An auto review will be launched at the deadline|

![immutable meme](../images/immutable.png)

## Resources

**Read or watch:**

- [Immutable Object concept](https://en.wikipedia.org/wiki/Immutable_object)
- [Immutable.js Documentation](https://immutable-js.com/docs/v4.2.4)
- [Immutable.js GitHub](https://github.com/immutable-js/immutable-js)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Immutable objects. Who, what, when, where, and why?
- How to use the Immutable.js library to bring immutability to Javascript
- The differences between List and Map
- How to use Merge, Concat, and Deep Merging
- What a lazy Seq is

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code
- A README.md file, at the root of the folder of the project, is mandatory
- All of your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
- All of your files should end with a new line
All of your functions must be exported

## Setup

- Install NodeJS `12.11.x`
- Install npm `6.11.x`

The script below installs the above 2 at the specified versions

```shell
$ curl -sl https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs
```

## Provided files

### `babel.config.js`

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `jsconfig.json`

```javascript
{
  "compilerOptions": {
    "target": "es6"
  },
  "exclude": [
    "node_modules"
  ]
}
```

### `package.json`

```javascript
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  },
  "dependencies": {
    "immutable": "^4.0.0-rc.12"
  }
}
```
