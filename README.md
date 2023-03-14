# Welcome to "Task organiser backend (mock)"

This app is purely mock api that will serve to develop task organiser frontend app. No real database will be used here.

## Api description

| Operation name            | Path                     | Type   | Request Data                     | Request headers                      | Response codes | Response data                                                                      | Response headers               |
|---------------------------|--------------------------|--------|----------------------------------|--------------------------------------|----------------|------------------------------------------------------------------------------------|--------------------------------|
| Login                     | /api/v1/security/login   | POST   | {login: string, password:string} |                                      | 200, 401       | {accessToken: string, refreshToken: string, username: string, userSurname: string} | content-type: application/json |
| Logout                    | /api/v1/security/login   | POST   |                                  | Authorization: bearer [access_token] | 200, 401       |                                                                                    |                                |
| Get new access token      | /api/v1/security/token   | POST   | {refreshToken: [refresh_token]}  |                                      | 200, 401       | {accessToken: string, refreshToken: string}                                        | content-type: application/json |
| Get all projects          | /api/v1/projects         | GET    |                                  | Authorization: bearer [access_token] | 200, 401       | IProject[]                                                                         | content-type: application/json |
| Create new project        | /api/v1/projects         | POST   | {}:IProject                      | Authorization: bearer [access_token] | 201, 401       | IProject[]                                                                         | content-type: application/json |
| Edit existing project     | /api/v1/projects         | PUT    | {}:IProject                      | Authorization: bearer [access_token] | 200, 401       | IProject[]                                                                         | content-type: application/json |
| Delete existing project   | /api/v1/projects/:id     | DELETE |                                  | Authorization: bearer [access_token] | 200, 401       |                                                                                    | content-type: application/json |
| Get all types for project | /api/v1/types/:projectId | GET    |                                  | Authorization: bearer [access_token] | 200, 401       | IType[]                                                                            | content-type: application/json |
| Create new type           | /api/v1/types            | POST   | {}:IType                         | Authorization: bearer [access_token] | 201, 401       | {}:IProject                                                                        | content-type: application/json |
| Edit existing type        | /api/v1/types            | PUT    | {}:IType                         | Authorization: bearer [access_token] | 200, 401       | {}:IProject                                                                        | content-type: application/json |
| Delete type               | /api/v1/types/:projectId | DELETE |                                  | Authorization: bearer [access_token] | 200, 401       | IProject[]                                                                         | content-type: application/json |
| Get all tasks for project | /api/v1/tasks/:projectId | GET    |                                  | Authorization: bearer [access_token] | 200, 401       | ITask[]                                                                            | content-type: application/json |
| Create new task           | /api/v1/tasks            | POST   | {}:ITask                         | Authorization: bearer [access_token] | 201, 401       | ITask[]                                                                            | content-type: application/json |
| Edit existing task        | /api/v1/tasks            | PUT    | {}:ITask                         | Authorization: bearer [access_token] | 200, 401, 404  | ITask[]                                                                            | content-type: application/json |
| Delete task               | /api/v1/tasks/:id        | DELETE |                                  | Authorization: bearer [access_token] | 200, 401, 404  |                                                                                    | content-type: application/json |
| Get all users             | /api/v1/users            | GET    |                                  | Authorization: bearer [access_token] | 200, 401       | IUser[]                                                                            | content-type: application/json |
| Create new user           | /api/v1/users            | POST   | {}:IUser                         | Authorization: bearer [access_token] | 201, 401       | {}:IUser                                                                           | content-type: application/json |
| Edit existing user        | /api/v1/users            | PUT    | {}:IUser                         | Authorization: bearer [access_token] | 200, 401, 404  | {}:IUser                                                                           | content-type: application/json |
| Delete user               | /api/v1/users/:id        | DELETE |                                  | Authorization: bearer [access_token] | 200, 401, 404  |                                                                                    | content-type: application/json |

## Data interfaces


| Interface, Enum or Type name | Interface, Enum or Type structure                                                                                                                 |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| ITask                        | {id?: string, projectId: string, typeId: string, title: string, startDate: Date, stopDate: Date, repeatability: ERepeatability, content: string } |
| ERepeatability               | {0 = None,1 =  daily, 2 = weakly, 3 = monthly}                                                                                                    |
| IType                        | {id?: string, projectId: string, name: string}                                                                                                    |
| IProject                     | {id?: string, name: string  }                                                                                                                     |                                                                                                      
| IUser                        | {id?: string, email: string, name: string, surname: string, password?: string}                                                                    |
