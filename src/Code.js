const spreadSheetId = "1hVvCH84KlDiKzyU-aTnvNId7JDAyWzyLeehzCgRNPFo";


function rowColumnIntoObject() {
  var sheet = SpreadsheetApp.openById(spreadSheetId).getSheetByName("Sheet1")
  const rows = sheet
    .getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn())
    .getValues();
    const keys= []
  rows.map((row , index) => {
    keys.push(row[0])
  });
  console.log(keys)
}
