# [Old] Letsqube.com Documentation 

Original source: <https://docs.google.com/document/d/1ixBuB0MeO9BeVWkf-QzBPaQIn4EOX16I9rOzj3xrL-E/edit#>

## Push API for the items below
1. Viewing qube
1. Editing a qube
1. Responding to a qube event from an email
1. Invitation confirmation
1. Select item to be brought 

_Both frontend and backend are done. Just a matter of pushing API from front end._

## Front End
1. **editing a qube is here**: https://github.com/biniamkebede/letsqube-frontend/blob/fddf9a7875d4b5a948509a7aea9d8e2df1924230/src/components/edit/EditQubeCard.tsx there are comments where the backend should be plugged
3. **responding to an invite is here**: https://github.com/biniamkebede/letsqube-frontend/blob/fddf9a7875d4b5a948509a7aea9d8e2df1924230/src/components/response/RespondQubeCard.tsx there are comments where the backend should be plugged

## Back End-Letsqube Backend development documentation

### For the frontend developer
| Function | Endpoint |
| - | - |
| On create qube event | https://letsqube.com/api/save.php |
| On contact or feedback message from contact page | https://letsqube.com/api/contact.php |
| On respond event from the visitor via email address [1] | https://letsqube.com/api/show.php?quber_detail=unique_id_here&&email=email_address_encrypted |
| On create qube review qube created [2] | https://letsqube.com/api/latest.php |
| Respond or confirm invitation yes or no  | https://letsqube.com/api/confirm.php |
| After confirmation if yes, choosing the item to bring | https://letsqube.com/api/choose.php |
| Display invited guests email and the item they have chosen to bring | https://letsqube.com/api/select_items.php?quber_detail=unique_id_here |


### API generator Code 
```php
<?php
json_encode(["sent" => true, "message" => "Qube Created"]);
json_encode(["sent" => false, "message" => "ERROR while creating qube"]);
?>
```

This php code above will echo out the status of the data communication between user from the frontend and the backend code. 

When user creates a qube or contact page message, if the communication is successfully stored into the database the first line of code will be called, and this is the API that will generate 

```json
{
  "sent": true,
  "message": "Qube Created"
}
```

Your frontend developer should be able to push this message and display the status.

If an error occurs on the database communication then this the API that will be pushed into the frontend software. If else statement is done at the backend which is my job and already done. If one of the two happens, then the message to display in a form of json format is one of the two. In here, you see an object that says sent, which is equivalent to status. Seeing the status of the query that was executed by the end user, it will display a status of Boolean character either true or false. If query execution is successfully reaching the database then the communication is true. Alongside with true Boolean shows a message that says Qube created if the end user executed a query from the event creation. 

Depending on the status of sent true or false, your front-end can customize and display a message from her react native source code. Below is when status is `false`.  
```json
{
  "sent": false,
  "message": "ERR  qube not created"
}
```

Above is the API that handles If an error occurs in the database. 

### Response

When it comes to the response, it is required for API to be pushed so that information can be shown for the invited guests what it is about. 
In order for the system to display a message based on GET method, I have prepared API just like the format on create qube, meaning...

```ts
interface IQube {
  organizer: string;
  guests: string[];
  dates: IDate[];
  location: string;
  toBring?: string[];
  alreadyHave?: string[];
  note?: string;
}
```

Small example on getting REST API for the response page. Let’s see an example when users try to extract information from their email address.
```php
if (!isset($myObj)) 
  $myObj = new stdClass();

  $myObj->organizer = $email;
  $myObj->location = $where;
  $myObj->note = $note;
  $myObj->alreadyHave = $bring_me;
  $myObj->toBring = $bring_u;
  $myObj->dates = $time_to;
  $myObj->guests = $invited_email;

  $myJSON = json_encode($myObj);
  echo $myJSON;
```

[1] This is the JSON format that is shown to be pushed to the frontend React.js **[REST API]**
```json
{
  "organizer": "cadsasd@dfas.com",
  "location": "Ohdfasdfasdfdasf",
  "note": "I am done",
  "alreadyHave": ["asdf ","asdf ","asdf ","asdf ","pans","sad f","sad f","sad f"],
  "toBring": ["asfd","asfd","asdf ","asdf ","a sdf","a sdf","a sdf","a sdf"],
  "dates": ["2020-09-01T13:00:00.000Z - 2020-09-01T14:30:00.000Z","2020-09-03T18:30:00.000Z - 2020-09-03T15:30:00.000Z"],
  "guests": ["bini@letsqube.com","bini@letsqube.com","contactme@caleb09.com","zion20189@gmail.org"]
}
```


Note: file information is only viewed by **unique id**, if unique id is not defined or empty this will be the API that will be sent to the frontend developer to be pushed
```json
{
  "sent": false,
  "message": "Empty Field"
}
```
Above is when an empty id is thrown by the end user or any other people. 


### ON_CREATE QUBE

I have noticed that the moment a quber creates a qube in your website, the user has the authority to view his created qube once the user reviews and posts his events. But in order for your qube to check the created event the user needs a special unique_id to or view his/her qube. So, the API to be pushed in your react native is only the unique id that is retrieved. Here it is

```json
{
  "sent": true,
  "id": "VFhjOVBRPT0="
}
```
So, the unique_id is where you will integrate is the id in your JSON format that says id. The API file that will generate this JSON format is latest.php. To access the full file path is https://letsqube.com/api/latest.php


#### Confirmation Qube

So once the invited guest directed to the qube page that is from his/her email address. Once it bring the user directly to eventID and also double check if that user is invited then, 

User must first
1. Confirm the invitation to yes or no
2. If no, block the user or display a message that says you have turned down the invitation request.. [more detail below the now displaying items]
3. If yes, show user lists to bring 

If user once confirms or already selects what needs to bring
a. If a user once selects what to bring next time, the user comes to that same page. Do not allow the user to select an item again. 
b. Item select process is only done once...


#### Now displaying item 

If the get element does not have an id or id does not exist in the database  this is the json script http_response_code(403)
```
["sent" => false, "message" => "does not exist!"]
```

```
["sent" => false, "message" => "does not exist!"]
```
This code is when a ‘yes’ confirmed user selected item display,  
```php
if (!isset($myObj)) 
                    $myObj = new stdClass();
                    $myObj->guests = $email;
                    $myObj->items = $invited_selected_lists;
                    $myJSON = json_encode($myObj);
```

Note: the highlighted are words that your frontend developer must give the name attribute on your JSON format

This code will generate what the invited guests have selected. 
```
[
	“Email” : “someone@example.com”
	“Items” : [“coca”,”ripple”, “BBQ”’]
],
[
	“Email” : “sometwo@example.com”
	“Items” : [“coca”,”ripple”, “BBQ”’]
]
...
Goes on and on because it loops, the loops are based on the invited guests. 
```

#### Confirmation 
```
["sent" => false, "message" =>  'empty field detected please fill all mandatory fields']
```
The above json code will be displayed if fields are empty

```
["sent" => true, "message" => "Successfull"]
```
The above code is code 200 which means the user has successfully confirmed yes or no and saved in the database. 

The below code will identify what are the fields content or the name of the fields please use the field name like this 
```
$obj['id']; // id means the on create qube -> eventID
$obj['email']; // the invited guests email address
$obj['q_status']; // holds the data whether user confirmed yes or no 
```

The data will be holding the value -> “yes” or -> ‘no’
 

In case if something went wrong during confirmation then the JSON format is this...
```
["sent" => false, "message" => "Error"]
```

If you as a developer happen to access some of the API file without giving a unique id then this is the statement that the backend code going to reply
```
http_response_code(403);
["sent" => false, "message" => "Empty must give unique ID"]
```

