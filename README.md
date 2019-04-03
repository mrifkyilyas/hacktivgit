# hacktivgit
| Route                       | HTTP   | Body                                   | Response                              | Error             | Description                                           |
| --------------------------- | ------ | -------------------------------------- | ------------------------------------- | ----------------- | ----------------------------------------------------- |
| /gitapi/starred             | GET    | none                                   | `Status code:200` `datatype:[arr]`    | `Status code:500` | List starred repositories                        |
| /gitapi/myrepo              | GET    | none                                   | `Status code:200` `datatype:[arr]`    | `Status code:500` | See authenticated user repositories                   |
| /gitapi/:owner/repo         | GET    | none                                   | `Status code:200` `datatype:[arr]`    | `Status code:500` | See repositories by other user                        |
| /gitapi/create              | POST   | `name:String`,<br>`description:String` | `Status code:201` `datatype:{object}` | `Status code:500` | Create new repository in authenticated user's account |
| /gitapi/starred/:owner/:repoName | DELETE | None                                   | `Status code:200` `datatype:{object}` | `Status code:500` | Unstar a previously starred repository                |
| /gitapi/:owner/:repoName | DELETE | None                                   | `Status code:200` `datatype:{object}` | `Status code:500` | delete repository in authenticated user's account                |

### USAGE
```
$npm init
$npm install express axios dotenv
$ npm run dev 
