const { ok } = require('assert');
const fs = require('fs');
const prompt = require('prompt-sync')();

console.log('\nPlik z Transifex powinien znajdować się w folderze PreparedJSONs\n————————————————————\n| Act         (1)  |\n| Cmd         (2)  |\n| Egosa       (3)  |\n| Ending      (4)  |\n| Kitune      (5)  |\n| KRep        (6)  |\n| KusoComment (7)  |\n| Line        (8)  |\n| MobComment  (9)  |\n| SystemText  (10) |\n| TenComment  (11) |\n| Tooltip     (12) |\n| Tweet       (13) |\n| yakujo      (14) |\n————————————————————');
const fileCase = prompt('Wybierz plik do zaktualizowania: ');

var firstData;
var secondData;

var arrayToReplace;
var replacementArray;

var fileName;

const oKeys = [];
const mKeys = [];



switch (fileCase) {
  case '1':

    fileName = "Act";
    //TitleEn -> TitleVn

    oKeys.push("TitleEn");
    mKeys.push("TitleVn");

    break;
  case '2':

    fileName = "Cmd";
    //LabelEn -> LabelVn, DescEn -> DescVn

    oKeys.push("LabelEn", "DescEn");
    mKeys.push("LabelVn", "DescVn");

    break;
  case '3':

    fileName = "Egosa";
    //BodyEn -> BodyVn

    oKeys.push("BodyEn");
    mKeys.push("BodyVn");

    break;
  case '4':

    fileName = "Ending";
    //EndingNameEn -> EndingNameVn, JissekiEn -> JissekiVn, ReasonEn -> ReasonVn

    oKeys.push("EndingNameEn", "JissekiEn", "ReasonEn" );
    mKeys.push("EndingNameVn", "JissekiVn", "ReasonVn" );

    break;
  case '5':

    fileName = "Kitune";
    //BodyEn -> BodyVn

    oKeys.push("BodyEn");
    mKeys.push("BodyVn");

    break;
  case '6':

    fileName = "KRep";
    //BodyEn -> BodyVn

    oKeys.push("BodyEn");
    mKeys.push("BodyVn");

    break;
  case '7':

    fileName = "KusoComment";
    //BodyEn -> BodyVN

    oKeys.push("BodyEn");
    mKeys.push("BodyVN");

    break;
  case '8':

    fileName = "Line";
    //BodyEn -> BodyVn

    oKeys.push("BodyEn");
    mKeys.push("BodyVn");

    break;
  case '9':

    fileName = "MobComment";
    //BodyEn -> BodyVn

    oKeys.push("BodyEn");
    mKeys.push("BodyVn");

    break;
  case '10':

    fileName = "SystemText"
    //BodyEn -> BodyVn

    oKeys.push("BodyEn");
    mKeys.push("BodyVn");

    break;
  case '11':

    fileName = "TenComment"
    //BodyEn -> BodyVn

    oKeys.push("BodyEn");
    mKeys.push("BodyVn");

    break;
  case '12':

    fileName = "Tooltip"
    //BodyEn -> BodyVn

    oKeys.push("BodyEn");
    mKeys.push("BodyVn");

    break;
  case '13':

    fileName = "Tweet"
    //OmoteBodyEn -> OmoteBodyVn, UraBodyEn -> UraBodyVn

    oKeys.push("OmoteBodyEn", "UraBodyEn");
    mKeys.push("OmoteBodyVn", "UraBodyVn");

    break;
  case '14':

    fileName = "yakujo"
    //BodyEn -> BodyVn

    oKeys.push("BodyEn");
    mKeys.push("BodyVn");

    break;

  default:
    console.log('Nieprawidłowy nr pliku');
    return;
}

firstData = JSON.parse(fs.readFileSync(`translations/pl/${fileName}.json`, 'utf8'));
secondData = JSON.parse(fs.readFileSync(`translations/original/${fileName}-original.json`, 'utf8'));

arrayToReplace = secondData.param.Array;
replacementArray = firstData.param.Array;

if(oKeys.length === 1) {
  for (let i = 0; i < replacementArray.length; i++) {
    arrayToReplace[i][mKeys[0]] = replacementArray[i][oKeys[0]];
  }
}

if(oKeys.length === 2) {
  for (let i = 0; i < replacementArray.length; i++) {
    arrayToReplace[i][mKeys[0]] = replacementArray[i][oKeys[0]];
    arrayToReplace[i][mKeys[1]] = replacementArray[i][oKeys[1]];
  }
}

if(oKeys.length === 3) {
  for (let i = 0; i < replacementArray.length; i++) {
    arrayToReplace[i][mKeys[0]] = replacementArray[i][oKeys[0]];
    arrayToReplace[i][mKeys[1]] = replacementArray[i][oKeys[1]];
    arrayToReplace[i][mKeys[2]] = replacementArray[i][oKeys[2]];
  }
}

// Zapisanie zmienionych danych do nowego pliku JSON
const outputFilePath = `final/${fileName}-to-deploy.json`;
fs.writeFileSync(outputFilePath, JSON.stringify(secondData, null, 2));

console.log('Zaktualizowane tłumaczenia zostały zapisane w:', outputFilePath);