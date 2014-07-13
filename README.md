company-directory-spring
========================






NOTES:
----------
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
