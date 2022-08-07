var firebaseConfig = {
    apiKey: "AIzaSyDPLBYsYU_Mezs7eJnSJB1PMSGJVXs1GxM",
    authDomain: "test-project-crud-a4da5.firebaseapp.com",
    databaseURL: "https://test-project-crud-a4da5-default-rtdb.firebaseio.com",
    projectId: "test-project-crud-a4da5",
    storageBucket: "test-project-crud-a4da5.appspot.com",
    messagingSenderId: "59917663996",
    appId: "1:59917663996:web:59ecb276c741387f8ea179",
    measurementId: "G-BVNNLLF6JQ"
};

firebase.initializeApp(firebaseConfig);
//Get All Data

function SelectAllData(){ 
    firebase.database().ref('test-project-crud/myForm').once('value',            function (AllRecords) {
        AllRecords.forEach(
            function(CurrentRecord){
                var name = CurrentRecord.val().Name;
                var email = CurrentRecord.val().Email;
                var pass = CurrentRecord.val().Pass;
                AddItemsToTable(name, email, pass);
            }
        );
    });
}
window.onload = SelectAllData;

var count = 0;
//Fill the table
function AddItemsToTable(name, email, pass){
    var tbody = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    td1.innerHTML = ++count;
    td2.innerHTML = name;
    td3.innerHTML = email;
    td4.innerHTML = pass;
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    tbody.appendChild(trow);
}
