const { ok } = require("assert");
const fs = require("fs");
const path = require('path');
const prompt = require("prompt-sync")();

function replaceKeys(fileName) {
  var firstData;
  var secondData;

  var arrayToReplace;
  var replacementArray;

  var fileName;

  const oKeys = [];
  const mKeys = [];

  switch (fileName) {
    case "Act":
      //TitleEn -> TitleVn

      oKeys.push("TitleEn");
      mKeys.push("TitleVn");

      break;
    case "Cmd":
      //LabelEn -> LabelVn, DescEn -> DescVn

      oKeys.push("LabelEn", "DescEn");
      mKeys.push("LabelVn", "DescVn");

      break;
    case "Egosa":
      //BodyEn -> BodyVn

      oKeys.push("BodyEn");
      mKeys.push("BodyVn");

      break;
    case "Ending":
      //EndingNameEn -> EndingNameVn, JissekiEn -> JissekiVn, ReasonEn -> ReasonVn

      oKeys.push("EndingNameEn", "JissekiEn", "ReasonEn");
      mKeys.push("EndingNameVn", "JissekiVn", "ReasonVn");

      break;
    case "Kitune":
      //BodyEn -> BodyVn

      oKeys.push("BodyEn");
      mKeys.push("BodyVn");

      break;
    case "KRep":
      //BodyEn -> BodyVn

      oKeys.push("BodyEn");
      mKeys.push("BodyVn");

      break;
    case "KusoComment":
      //BodyEn -> BodyVN

      oKeys.push("BodyEn");
      mKeys.push("BodyVN");

      break;
    case "Line":
      //BodyEn -> BodyVn

      oKeys.push("BodyEn");
      mKeys.push("BodyVn");

      break;
    case "MobComment":
      //BodyEn -> BodyVn

      oKeys.push("BodyEn");
      mKeys.push("BodyVn");

      break;
    case "SystemText":
      //BodyEn -> BodyVn

      oKeys.push("BodyEn");
      mKeys.push("BodyVn");

      break;
    case "TenComment":
      //BodyEn -> BodyVn

      oKeys.push("BodyEn");
      mKeys.push("BodyVn");

      break;
    case "Tooltip":
      //BodyEn -> BodyVn

      oKeys.push("BodyEn");
      mKeys.push("BodyVn");

      break;
    case "Tweet":
      //OmoteBodyEn -> OmoteBodyVn, UraBodyEn -> UraBodyVn

      oKeys.push("OmoteBodyEn", "UraBodyEn");
      mKeys.push("OmoteBodyVn", "UraBodyVn");

      break;
    case "yakujo":
      //BodyEn -> BodyVn

      oKeys.push("BodyEn");
      mKeys.push("BodyVn");

      break;

    default:
      console.log("Nieprawidłowy plik");
      return;
  }

  firstData = JSON.parse(
    fs.readFileSync(
      `translations/pl/${fileName}.json`,
      "utf8"
    )
  );
  secondData = JSON.parse(
    fs.readFileSync(`original/${fileName}-original.json`, "utf8")
  );

  arrayToReplace = secondData.param.Array;
  replacementArray = firstData.param.Array;

  if (oKeys.length === 1) {
    for (let i = 0; i < replacementArray.length; i++) {
      arrayToReplace[i][mKeys[0]] = replacementArray[i][oKeys[0]];
    }
  }

  if (oKeys.length === 2) {
    for (let i = 0; i < replacementArray.length; i++) {
      arrayToReplace[i][mKeys[0]] = replacementArray[i][oKeys[0]];
      arrayToReplace[i][mKeys[1]] = replacementArray[i][oKeys[1]];
    }
  }

  if (oKeys.length === 3) {
    for (let i = 0; i < replacementArray.length; i++) {
      arrayToReplace[i][mKeys[0]] = replacementArray[i][oKeys[0]];
      arrayToReplace[i][mKeys[1]] = replacementArray[i][oKeys[1]];
      arrayToReplace[i][mKeys[2]] = replacementArray[i][oKeys[2]];
    }
  }

  const outputFilePath = `final/${fileName}-to-deploy.json`;
  fs.writeFileSync(outputFilePath, JSON.stringify(secondData, null, 2));

  console.log("Aktualizacja:", outputFilePath);
}


fs.readdirSync("translations/pl").forEach(file => {
  replaceKeys(path.parse(file).name);
});