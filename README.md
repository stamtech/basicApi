# Basic API

Basic api with 3 endpoints
This API is deployed on aws and serve three endpoint :

- eurosport.eu-west-3.elasticbeanstalk.com/players
- eurosport.eu-west-3.elasticbeanstalk.com/players/:id
- eurosport.eu-west-3.elasticbeanstalk.com/players/dynamic

## Getting Started

Clone the project with the following command

```
git@github.com:stamtech/basicApi.git
```

### Prerequisites

Make sure to have nodeJs installed.
Add an env variable for api url (question 3).

```
export API_URL= "api url"
```

### Installing

install all the dependecies to run the api localy

```
npm ci
```

## Running the tests

```
npm test
```

## Deployment

the deployment is linked to master branch with github hooks, it uses aws code pipeline, code build, and elastic beanstalk

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
