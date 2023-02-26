function myFunction() {

  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  // [Row][Col]

  DriveApp.createFolder(data[0][6]);
  var mainId = DriveApp.getFoldersByName(data[0][6]).next().getId();
  var mainFolder = DriveApp.getFolderById(mainId);

  for(var i = 1; i < 5; i++){
    var year = data[1][i];

    mainFolder.createFolder("Class_" + year);
    var yearFolderId = DriveApp.getFoldersByName("Class_" + year).next().getId();
    var yearFolder = DriveApp.getFolderById(yearFolderId);


    var count = data[0][i];
    console.log(year);
    for(var j = 2; j < 2+count; j++){
      yearFolder.createFolder(data[j][i]);
    }
  }



}
