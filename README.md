# Web-API-Client-Server-Scoping

## Install All Node Package Manager

```
npm install express-generator -g
express -e

npm install cors --save
```

## Install Library For Client Site

```
touch .bowerrc

Inside .bowerrc
{
    "directory": ".lib/"
}

npm install bower -g
bower install bootstrap --save
```

## Endpoint

```
| Endpoind      | HTTP      | Description                       |
| ----------    | -----     | ------------                      |
| api/todo      | GET       | Change title with attribute       |
| api/skills/   | GET       | Change title with data from url   |
| api/meals/    | GET       | Change title with random data     |
```
