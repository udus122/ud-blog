---

title: "Next.js✕Storybook✕TypeScript の path alias を使うときの設定"
date: "2021-02-04T05:35:07.322Z"

---

# Next.js✕Storybook✕TypeScript の path alias を使うときの設定

## 背景

`tsconfig.json`を以下のように設定して、path alias を使っているとする。

```json
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
```

Next.js は最初から TypeScript 対応しており、`tsconfig.json`を読み込んで、いい感じに解釈してくれる。
Storybook は、デフォルトで TypeScript に対応しておらず、自前で設定を書く必要があるらしい。

## 対処法

storybook は内部的に Webpack を使っているらしく、以下のどちらかの方法で path alias を解釈してくれるようになる。

### 方法 1: `tsconfig-paths-webpack-plugin`を使う

webpack のプラグインに`tsconfig-paths-webpack-plugin`を導入すれば、tsconfig の設定をよしなに読み込んでいい感じにコンパイルしてくれるらしい。

#### 手順

- プラグインのインストール

`yarn add -D tsconfig-paths-webpack-plugin`

- `.storybook/main.js`を以下のように設定する。

```javascript
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [
          ...config.resolve.plugins,
          new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
        ],
      },
    };
  },
};
```

### 方法 2: `config.resolve.alias`を設定する

以下のように webpack の `config.resolve.alias`へ alias を任意のエイリアスを設定してあげる。

```javascript
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@": path.resolve(__dirname, "../src"),
        },
      },
    };
  },
};
```

## 考察

手動の作業が少なく、変更に強いのは手順 1 なので、原則手順 1 の対処法で問題なさそう。

ただプラグインをなるべく入れたくない、ブラックボックスを増やすたくないという人は手順 2 を使ったらよい。

storybook というか、webpack✕TypeScript を使うときの設定方法として使えそう。

## 参考

- [Cant add aliases in storybook config · Issue #11989 · storybookjs/storybook](https://github.com/storybookjs/storybook/issues/11989)
- [dividab/tsconfig-paths-webpack-plugin: Load modules according to tsconfig paths in webpack.](https://github.com/dividab/tsconfig-paths-webpack-plugin)
