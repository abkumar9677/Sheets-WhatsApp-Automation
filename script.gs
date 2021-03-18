// To add a menu itme to menu bar, I have amde a function onOpen()
function onOpen(e){
  SpreadsheetApp.getUi()
    .createMenu('WhatsAppMenu')
    .addItem('Send Whatsapp Message', 'myFunction')
    .addSeparator()
    .addToUi();
}


// This function will iterate over the sheet data
function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();   // Number of rows to process
  var lastColumn = sheet.getLastColumn();
  var dataRange = sheet.getRange(2, 1, lastRow-1, lastColumn); 
  var sheetData = dataRange.getValues();
  for (var i = 0; i < sheetData.length; ++i) {
    var row = data[i]; 
    var mobileNo = row[2]; 
    var mess = row[4];
//     Logger.log(mess);   
    var my_apikey = "**************";
    var destination = mobileNo; 
    var message = mess; 
    var api_url = "http://panel.rapiwha.com/send_message.php"; 
    api_url += "?apikey="+ my_apikey; 
    api_url += "&number="+ destination; 
    api_url += "&text="+ encodeURIComponent (message); 
    var response = UrlFetchApp.fetch(api_url);
//     Logger.log(response.getContentText());   
  }
}
