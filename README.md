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
# LICENSE
MIT