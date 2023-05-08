import { program } from "commander";
import * as fs from "node:fs/promises";
import { marked } from "marked";

program.option("--gfm", "GFMを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

// コマンドライン引数のオプションを取得する
const options = program.opts();

// コマンドライン引数で指定されなかったオプションにデフォルト値を上書きする
const cliOptions = {
    gfm: options.gfm ?? false,
};

// ファイルをUTF-8として非同期で読み込む
fs.readFile(filePath, { encoding: "utf8" }).then(file => {
  const html = marked.parse(file, {
    gfm: cliOptions.gfm,
  });
  console.log(html);
}).catch(err => {
  console.error(err.message);
  process.exit(1);
});