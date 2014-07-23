# Company Directory #

This application serves as a central hub to easily retrieve employee data, e.g. 
phone numbers, roles, support info, etc. It will also serve as the foundation for automating
any on boarding and off boarding processes.


## Prerequisites ##

- Spring Boot (created with dependency specified in pom.xml) - http://projects.spring.io/spring-boot/
- Maven 3.2.2 - http://maven.apache.org/download.cgi
- JDK 1.7
- MySQL 5 or greater - http://dev.mysql.com/downloads/

This app is a Spring Boot application and thus leaves much of the configuration to the framework. 
Dependencies and builds are managed via maven and thus maven is necessary
   
## Build Instructions ##

This project requires Maven 3 to build. 

Get started:

    clone the repo: git clone https://github.com/jlamadrid/company-directory-spring
    cd company-directory-spring  
    maven clean compile

### Database
- The application.properties file contains the database connection info.
- The application currently uses mysql and thus a schema and user defined in application.properties must be created.
- Upon restart the following files are executed to create test data: schema.sql and data.sql

### Security

- You can configure security in WebSecurityConfig.java
- To keep things simple use the in-memory authentication provided by spring security.
- To configure CROWD based security simply uncomment @ImportResource and comment out any overriding 
  methods in WebSecurity Config

### Testing and Running the application

Testing: 

    in your IDE or command line run 'mvn test' 

Running the app:

    open project in your IDE and exec Main.java
    or command line: mvn spring-boot:run
    open URL: http://localhost:8080/app
    when prompted for username password see WebSecurityConfig for credentials

## NOTES & FUTURE TODOs ##

Follow this guide to access entities through a hypermedia-based RESTful front end:
https://github.com/spring-guides/gs-accessing-data-rest

NOTE: first have to figure out how ExtJS can access a ypermedia based rest api.

Steps:
1 - Add the following dependency to your POM

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-rest</artifactId>
        </dependency>
        
2 - Add "@Import(RepositoryRestMvcConfiguration.class)" to the main app

3 - Remove "@Repository" from CrudRepository and replace with 
    @RepositoryRestResource(collectionResourceRel = "employee", path = "employee")
    
4 - You can remove Rest Controllers now and access hypermedia based restful URLS.
-----
