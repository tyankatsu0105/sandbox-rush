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
- 
# LICENSE
MIT