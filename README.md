#API Tracking Correos de Chile

Its an Api REST for Chile Post, through a tracking number get shipping information.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* nodejs + npm [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* AWS account [http://aws.amazon.com/](http://aws.amazon.com/)

#### Optional for test:
* Postman [https://www.getpostman.com/](https://www.getpostman.com/)

### Installation

#### Install via git clone

```
$ git clone https://github.com/fquevedo/API_tracking_correos_chile
$ cd API_tracking_correos_chile
$ npm install 
```
Serverless, cheerio and request module will be installed.

#### Deploy Serverless Framework

For upload updated code to AWS Lambda.

```
$ serverless deploy
```

## Running the tests

Can be tested using [https://6d84hnikkf.execute-api.us-east-1.amazonaws.com/dev/{Tracking_number}](https://6d84hnikkf.execute-api.us-east-1.amazonaws.com/dev/{Tracking_number}), make sure you are using a GUI plataform like Postman or browser with JSON viewer extension.  

#### Example URL:
 [https://6d84hnikkf.execute-api.us-east-1.amazonaws.com/dev/3072708247886](https://6d84hnikkf.execute-api.us-east-1.amazonaws.com/dev/3072708247886)


## Built With

* [Node.js](https://nodejs.org/es/) - JavaScript runtime built 
* [Serverless](https://serverless.com/framework/docs/) - The web framework used
* [AWS](https://aws.amazon.com) - AWS Lambda & Api Gateway cloud services used
* [Postman](https://www.getpostman.com/) - For test Api requests

## Authors

* **Fernando Quevedo** - *Initial work* - [fquevedo](https://github.com/fquevedo)

