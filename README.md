# To Do Back-end app
To use this app you need to:
 * have an postgresql database to connect
 * create table 
 ```
CREATE TABLE toDoList(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	text varchar(255) NOT NULL,
	status bool);
```
 * (Optional) add some notes to fast review in app
 ```
INSERT INTO toDoList(text, status)
VALUES ('wash the plants', false),
	   ('clean the house', false);
```
 * fill up your credentials in `./src/database.js`
 * launch `./src/index.js`
 * connect to server by http://localhost:4000/graphql

Examples of graphql requests:
* get all items - ```query {
                       items {
                         text
                         status
                       }
                     }```
* get one item by id - ```query {
                             item (id: 1) {
                               text
                               status
                             }
                           }```
* add new item - ```mutation {
                      addItem (text: "feed my pet", status: false) {
                        text
                        status
                      }
                    }```
* delete item - ```mutation {
                     deleteItem (id: 1) {
                       text
                       status
                     }
                   }```
* change status - ```mutation {
                       editStatus (id: 1) {
                         text
                         status
                       }
                     }```                