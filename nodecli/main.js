// commanderモジュールからprogramオブジェクトをインポートする
import { program } from "commander";
// コマンドライン引数をcommanderでパースする
program.parse(process.argv);

const filePath = program.args[0];
console.log(filePath);