# MEMO
- sampleがここにある
  - https://github.com/microsoft/rush-example
  - この構成はglobal installしないとできない（npx無理）ので、globalが嫌な人は抵抗ありそう
- rushの構成ファイルがjsonc前提なの多いので、エディタのsettingを変更したほうがやりやすそう
```json
{
  "files.associations": {
    "common/config/rush/*.json": "jsonc",
    "rush.json": "jsonc"
  },
}
```

- もうNode.jsが14をLTSにしたから、`"nodeSupportedVersionRange": ">=12.13.0 <15.0.0",` にしておいてよさそう。
  - defaultは`"nodeSupportedVersionRange": ">=12.13.0 <13.0.0",` になっているので、修正入るかな
- monorepo管理対象のパッケージにscope付ける場合は、rush.jsonのpackageNameにもscopeつけないとエラーになる
- rootにpackage.jsonがないので、CIで動かすときにRushのbin解決どうするのかと思いきや、`rush init`したときにできた、`common/scripts/install-run-rush.js`が
- CIのfetch先がmasterでベタ書きされているので、mainとかがdefaultブランチだったら書き換える必要あり
  - ship.jsみたいに対話的にdefault branch指定できたら良さそう
- common/git-hooksに書いた内容が.git/hooksにコピーされるので、huskyいらない！！！
  - hooksの内容がcommitできるという最高な機能
- rushのautoinstallerでモジュールを自動でインストールさせられる
  - package.json作ったら`rush update-autoinstaller`でpnpm-lock.yamlが作られる
  - hooksと組み合わせることができる
- `rush check`から進めなくなった。
  - 差分ファイルないよと言われる
  - devブランチとかに切り替えてやったら進めるけど、これでいいのかドキュメントに書いてない
- `rush check`が`ensureConsistentVersions`を尊重しない
  - バージョン違う指摘がされて終わり


# Packages
|Folder|Version|Changelog|Package|
|:--|:--|:--|:--|
|[/tools/my-toolchain](./tools/my-toolchain)|[![npm version](https://badge.fury.io/js/%40tyankatsu0105%2Fmy-toolchain.svg)](https://badge.fury.io/js/@tyankatsu0105/my-toolchain)|[changelog](./tools/my-toolchain/CHANGELOG.md)|[@tyankatsu0105/my-toolchain](https://www.npmjs.com/package/@tyankatsu0105/my-toolchain)|

# LICENSE
MIT