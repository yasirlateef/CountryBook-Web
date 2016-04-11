# CountryPedia-API
A simple encyclopia for countries of the world. It is a RESTful API that I created using Node.js's Express framework and it is just a starter project. The data about the countries could be found in 'data/countries.json' file. 

## How to Use :

#### Clone the repo and install depedencies

```sh
$ git clone https://github.com/yasir-lateef/CountryPedia-API.git
$ cd CountryPedia-API
$ npm install
```

#### API Routes

##### Countries

- List of all the countries
```sh
http://localhost:8888/api/countries/all
```

- Information about a country
```sh
http://localhost:8888/api/countries/:countryName
```
Replace 'countryName' with the name of the country you want info about. For Example Pakistan, United States etc.


- Information about a country's specific attribute
```sh
http://localhost:8888/api/countries/:countryName/:attribName
```
Replace 'countryName' and 'attribName' parameters with the country and attribute(lowercase) you want info about. For Example Pakistan, United States etc.
###### List of Attributes
 - name
 - capital
 - region
 - altSpellings
 - subregion
 - population
 - demonym
 - area
 - timezones
 - borders
 - callingCodes
 - currencies
 - languages
 
 ##### Regions
 
 - List of Regions
 ```sh
 http://localhost:8888/api/regions
 ```
 
 - List of countries in a specified region
 ```sh
 http://localhost:8888/api/regions/:regionName
 ```
 Replace 'regionName' parameter with the name of one of the regions. For Example Africa, Europe etc
 ###### List of Regions
 - Asia
 - Europe
 - Africa
 - Oceania
 - Americas
