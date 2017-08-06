# Hometrack Coding Challenge

### Live demo (warning: Free Heroku account = slow loading)

[https://hometrack-code-test.herokuapp.com](https://hometrack-code-test.herokuapp.com)

### Directory structure

```shell
├── Dockerfile
├── README.md
├── api
│   ├── controllers
│   │   ├── filter.js
│   │   └── ping.js
│   ├── definitions
│   │   ├── index.yaml
│   │   ├── propertyRequest.yaml
│   │   └── propertyResponse.yaml
│   ├── index.js
│   ├── middleware
│   │   └── swagger.js
│   ├── paths
│   │   ├── filter.yaml
│   │   ├── index.yaml
│   │   └── ping.yaml
│   ├── responses
│   │   ├── 400.yaml
│   │   ├── 401.yaml
│   │   ├── 404.yaml
│   │   ├── 500.yaml
│   │   └── index.yaml
│   └── swagger
│       ├── src.yaml
│       ├── swagger.yaml
│       └── util.js
├── bin
│   └── www.js
├── config
│   └── default.yaml
├── docker-compose.yaml
├── index.js
├── newrelic.js
├── package.json
└── test
    ├── api.spec.js
    └── mock
        ├── hometrack-sample-request.json
        └── hometrack-sample-response.json
```

## Stack

### Framework
- Node (es6/7)
- Express 4
- Swagger
- Docker

### Plugins
- Babel

### Code quality control
- Eslint
- Unit testing
- Coverage reporting

### Installation

This app requires [Node.js](https://nodejs.org/) v 6.11.2 or later to run

Clone this project.

Install the dependencies and start the server:

```sh
$ cd ./hometrack
$ npm install
$ npm start
```

Service is now running on localhost:3000

Or using Docker:

Install Docker:

https://www.docker.com/get-docker

```sh
`docker-compose up --build`
```

Service is now running on localhost:8080

### Swagger

![Swagger logo](http://2434zd29misd3e4a4f1e73ki.wpengine.netdna-cdn.com/wp-content/uploads/2016/10/cropped-Swagger-Logo.png)

[Swagger.io](http://swagger.io/)

Swagger UI allows anyone — be it your development team or your end consumers — to visualize and interact with the API’s resources without having any of the implementation logic in place. It’s automatically generated from your Swagger specification, with the visual documentation making it easy for back end implementation and client side consumption.

Swagger UI is available directly from the production URL:

[https://hometrack-code-test.herokuapp.com](https://hometrack-code-test.herokuapp.com)

### Test
```sh
npm test
```

### Coverage
Outputs a code test coverage report to stdout and saves the HTML report to /coverage
```sh
npm run coverage
```

### Todos
 - Load testing the API using minigun or similar
 - Production environment: Auto scaling and load balancing
 - Adding more tests
 - Dev only: Adding nodemon (filewatching, auto restart)

### Query the live API from your command line

Run this from your terminal. It will query the live API posting provided JSON request sample data.
Unix / Linux systems only.

```shell
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
    "payload": [
        {
            "address": {
                "buildingNumber": "28",
                "lat": -33.912542000000002,
                "lon": 151.00293199999999,
                "postcode": "2198",
                "state": "NSW",
                "street": "Donington Ave",
                "suburb": "Georges Hall"
            },
            "propertyTypeId": 3,
            "readyState": "init",
            "reference": "aqsdasd",
            "shortId": "6Laj49N3PiwZ",
            "status": 0,
            "type": "htv",
            "workflow": "pending"
        },
        {
            "address": {
                "buildingNumber": "Level 6",
                "postcode": "2060",
                "state": "NSW",
                "street": "146 Arthur Street",
                "suburb": "North Sydney"
            },
            "propertyTypeId": 3,
            "readyState": "init",
            "reference": "asdasd",
            "shortId": "E9eQVYEMkub2",
            "status": 4,
            "type": "htv",
            "valfirm": null,
            "workflow": "completed"
        },
        {
            "address": {
                "buildingNumber": "25",
                "postcode": "4000",
                "state": "QLD",
                "street": "Mary St",
                "suburb": "Brisbane"
            },
            "propertyTypeId": 3,
            "readyState": "init",
            "reference": "asdas",
            "shortId": "nQMyWWLBvu4A",
            "status": 1,
            "type": "avm",
            "workflow": "pending"
        },
        {
            "address": {
                "buildingNumber": "92",
                "postcode": "2000",
                "state": "NSW",
                "street": "Pitt Street",
                "suburb": "Sydney",
                "unitNumber": "Suite 1 Level 8"
            },
            "propertyTypeId": 3,
            "readyState": "complete",
            "reference": "asdasd",
            "shortId": "ZM73nE4nKH56",
            "status": 4,
            "type": "avm",
            "workflow": "cancelled"
        },
        {
            "address": {
                "buildingNumber": "28",
                "lat": -33.912542000000002,
                "lon": 151.00293199999999,
                "postcode": "2198",
                "state": "NSW",
                "street": "Donington Ave",
                "suburb": "Georges Hall"
            },
            "propertyTypeId": 3,
            "readyState": "complete",
            "reference": "asdasdas",
            "shortId": "AQzAB5xMXFNx",
            "status": 3,
            "type": "avm",
            "workflow": "completed"
        },
        {
            "address": {
                "buildingNumber": "360",
                "postcode": "3000",
                "state": "VIC",
                "street": "Elizabeth St",
                "suburb": "Melbourne",
                "unitNumber": "Level 28"
            },
            "propertyTypeId": 3,
            "readyState": "complete",
            "reference": "asdas",
            "shortId": "yebZvgdA7FRk",
            "status": 1,
            "type": "htv",
            "workflow": "completed"
        },
        {
            "address": {
                "buildingNumber": "153",
                "postcode": "2229",
                "state": "NSW",
                "street": "Denman Avenue",
                "suburb": "CARINGBAH",
                "unitNumber": "Suite 7"
            },
            "propertyTypeId": 3,
            "readyState": "complete",
            "reference": "asdas",
            "shortId": "YP7NJVNpVCdr",
            "status": 4,
            "type": "htv",
            "workflow": "cancelled"
        }
    ]
}' 'https://hometrack-code-test.herokuapp.com/filter'
```
