const spreadSheetId = "1hVvCH84KlDiKzyU-aTnvNId7JDAyWzyLeehzCgRNPFo";
const regex = /[a-zA-Z]/g;
const sheetDataFull = [];

async function rowColumnIntoObject() {
  try {
    const sheet =
      SpreadsheetApp.openById(spreadSheetId).getSheetByName("Sheet1");
    const rows = sheet
      .getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn())
      .getValues();

    const keys = await generateKeys(rows[0]);

    rows.map((row, index) => {
      const obj = {};
      if (index > 0) {
        row.map((elem, index) => {
          obj[keys[index]] = elem;
        });
        sheetDataFull.push(obj);
      }
    });
    console.log(sheetDataFull);
  } catch (error) {
    console.log(error, "Assigning Value Failed.");
  }
}

async function generateKeys(allColumnHead) {
  try {
    const keys = await allColumnHead.map((columnHead) => {
      columnHead = columnHead.trim();
      if (columnHead !== "") {
        const letterArr = columnHead.match(regex);
        letterArr[0] = letterArr[0].toLowerCase();
        const key = letterArr.join("");
        return key;
      }
      return columnHead;
    });
    return keys;
  } catch (error) {
    console.log(error, "Keys Generation Failed.");
  }
}
