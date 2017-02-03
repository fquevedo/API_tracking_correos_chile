#API tracking Correos de Chile

Api for Correos de Chile, get shipment information using tracking number.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* nodejs + npm [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* AWS account [http://aws.amazon.com/](http://aws.amazon.com/)
* Serverless config [https://serverless.com/framework/docs/providers/aws/guide/credentials/)

#### Optional for test:
* Postman [https://www.getpostman.com/](https://www.getpostman.com/)

### Installing

#### Install via git clone

```
$ git clone https://github.com/fquevedo/git_tracking_correos_chile
$ cd git_tracking_correos_chile
$ npm install (install serverless, cheerio, request modules)
```

#### Deploy with the Serverless Framework

```
$ serverless deploy
```

## Running the tests

Can be tested using  https://6d84hnikkf.execute-api.us-east-1.amazonaws.com/dev/{Tracking_number} with GUI plataform like Postman or browser with JSONView extension.  

#### Example URL:
https://6d84hnikkf.execute-api.us-east-1.amazonaws.com/dev/3072708247886


## Built With

* [Node.js](https://nodejs.org/es/) - JavaScript runtime built 
* [Serverless](https://serverless.com/framework/docs/) - The web framework used
* [AWS](https://aws.amazon.com) - AWS Lambda & Api Gateway cloud services used
* [Postman](https://www.getpostman.com/) - For test Api requests

## Authors

* **Fernando Quevedo** - *Initial work* - [fquevedo](https://github.com/fquevedo)

