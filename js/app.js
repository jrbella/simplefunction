 var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];


let table = '';
let rows = table_data.length
let cols = Object.keys(table_data[0]).length
let name = table_data

//start function
const createTable = function(table_data) {
    
    table += '<th>First Name</th>';
    table += '<th>Last Name</th>';
    table += '<th>Home</th>';
for(let i = 0; i < rows; i ++){

  table += '<tr>';
        if(table_data[i].first_name === null){
            table += '<td> Unavailable</td>';
        }
        else{
          table += '<td>' + table_data[i].first_name + '</td>';
        }
         if(table_data[i].last_name === null){
             table += '<td> Unavailable</td>';
        }
        else{ 
            table +=  '<td>' + table_data[i].last_name + '</td>';
        }
         if(table_data[i].home === null){
             table += '<td> Unavailable</td>';
        }
        else{ 
            table +=  '<td>' + table_data[i].home + '</td>';
        }

    
    
  table += '</tr>';
}
document.write('<table border=1>' + table + '</table>')

}

createTable(table_data);