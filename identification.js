function greet() {
var db; 
var shortName = 'plantbase'; 
var version = '1.0'; 
var displayName = 'myDatabase'; 
var maxSize = 65535; 


db = openDatabase(shortName, version, displayName, maxSize); 
console.log("asd");
db.transaction(function(transaction) {
    transaction.executeSql('SELECT * FROM plantbase;', [],
    function(transaction, result) {

        if (result != null && result.rows != null) {
            for (var i = 0; i < result.rows.length; i++) {
                var row = result.rows.item(i);
                alert(row.ID);
            }
        }
    });
});

alert("hello");
}