<p align="center">
  <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/nlwspacetime-logo.svg" width="350" >
</p>

<br/>

<p align="center">	
   <img src="https://img.shields.io/badge/-ReactJS-CD7AB5?style=flat&logoColor=white" />
  
   <img src="https://img.shields.io/badge/-NextJS-CD7AB5?style=flat&logoColor=white" />
   
   <img src="https://img.shields.io/badge/-React Native-CD7AB5?style=flat&logoColor=white" />
     
   <img src="https://img.shields.io/badge/-NodeJS-CD7AB5?style=flat&logoColor=white" />

   <img src="https://img.shields.io/badge/-Fastify-CD7AB5?style=flat&logoColor=white" />
</p>



## :bar_chart: About
 Time capsule application created to remember significant moments,
allowing users to include texts and photos of events in their lives on a timeline organized by month and year.
Made at Rocketseat's Next Level Week.


## :computer:  WEB

##### Technologies and libs:                                                                
- [React](https://pt-br.reactjs.org/)
- [NextJS 13](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [DayJS](https://day.js.org/)

##### New Implementations:    
- The user has the possibility to type the memory date.
- The memory's detail page accessible by clicking on 'read more'.

<p align="center">
   <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-000.png" width="986" >
  <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-01.png" width="986" >
  <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-02.png" width="986" >
</p>

#### how to run the project: 
```bash
#  Clone this repository.
$ git clone https://github.com/KRochaS/NextLevelWeek12.git

# Configure OAuth on GitHub and add the necessary information to the .env.local file
# NEXT_PUBLIC_GITHUB_CLIENT_ID=<YOUR_CLIENT_ID>

# Navigate to the project folder in the terminal/cmd.
$ cd web/

# Install the dependencies.
$ npm i ou yarn install

# Run the project
$ npm run dev

# client and server successfully
```
## :desktop_computer: Backend

##### Technologies and libs:                                                                
- [NodeJS](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [Axios](https://axios-http.com/)
- [Prisma](https://www.prisma.io/)
- [SQLite](https://sqlite.org/)
- [Swagger](https://swagger.io/)
- [Zod](https://zod.dev/)

##### New Implementations:    
- Save the date type by the user in the database.
- API documentation with Swagger.

<p align="center">
   <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-backend.PNG"  width="986" >
   <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-swagger-01.png"  width="986" >
  <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-swagger-02.png"  width="986" >
   <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-swagger-04.png"  width="986">
</p>

#### how to run the project: 

```bash

#  Clone this repository.
$ git clone https://github.com/KRochaS/NextLevelWeek12.git

# Configure OAuth on GitHub and add the necessary information to the .env file 
# for web and mobile applications
#  GITHUB (Web)
# GITHUB_CLIENT_ID=<YOUR_CLIENT_ID>
# GITHUB_CLIENT_SECRET=<YOUR_CLIENT_SECRET_ID>
# GITHUB (Mobile)
# GITHUB_CLIENT_ID=<YOUR_CLIENT_ID>
# GITHUB_CLIENT_SECRET=<YOUR_CLIENT_SECRET_ID>

# Configure Database in .env file
# DATABASE_URL="file:./dev.db"

# Navigate to the project folder in the terminal/cmd.
$ cd server/

# Install the dependencies.
$ npm i ou yarn install

# Run the project
$ npm run dev

# HTTP server running on http://localhost:3333
```

You can import the [Insomnia](https://insomnia.rest/) Workspace by using the button below:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=API%20-%20NLWSpacetime&uri=https%3A%2F%2Fgithub.com%2FKRochaS%2FNextLevelWeek12%2Fblob%2Fmaster%2Fserver%2Finsomnia%2Fnlwspacetime-api.json)





## :iphone:  Mobile

##### Technologies and libs:                                                                
- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- [NativeWind](https://www.nativewind.dev/)


<p align="center">
   <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-mobile-01.jpg"  width="260" >
   <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-mobile-02.jpg"  width="260" >
    <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-mobile-03.jpg"  width="260" >
    <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-mobile-04.jpg"  width="260" >
    <img src="https://github.com/KRochaS/NextLevelWeek12/blob/master/.github/screenshot-mobile-05.jpg"  width="260" >
  <img src=""  width="986" >
</p>

#### how to run the project: 

```bash

#  Clone this repository.
$ git clone https://github.com/KRochaS/NextLevelWeek12.git

# Navigate to the project folder in the terminal/cmd.
$ cd mobile/

# Install the dependencies.
$ npm i ou yarn install

# Run the project
$  npx expo start
```






















