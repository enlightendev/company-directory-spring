package com.philafin.companydirectory.web.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

/**
 * GreetingController handles GET requests for /greeting by returning a new instance of the Greeting class:
 *
 * A key difference between a traditional MVC controller and the RESTful web service controller above is the way
 * that the HTTP response body is created. Rather than relying on a view technology to perform server-side
 * rendering of the greeting data to HTML, this RESTful web service controller simply populates and returns a
 * Greeting object. The object data will be written directly to the HTTP response as JSON.
 *
 * This code uses Spring 4’s new @RestController annotation, which marks the class as a controller where every
 * method returns a domain object instead of a view. It’s shorthand for @Controller and @ResponseBody rolled together.
 */
@RestController
@RequestMapping("/api")
public class SimpleRestController {

    private static final String template = "Hello, %s!";

    private class Greeting {

        private final long id;
        private final String content;

        public Greeting(long id, String content) {
            this.id = id;
            this.content = content;
        }

        public long getId() {
            return id;
        }

        public String getContent() {
            return content;
        }
    }

    /**
     * Controllers typically do not have state maintained in instance variables, if so then use thread safe long variable
     */
    private final AtomicLong counter = new AtomicLong();

    /**
     * The @RequestMapping annotation ensures that HTTP requests to /greeting are mapped to the greeting() method.
     *
     * We do not specify GET vs. PUT, POST, and so forth, because @RequestMapping maps all HTTP operations by default.
     * Use @RequestMapping(method=GET) to narrow this mapping.
     *
     * @RequestParam binds the value of the query string parameter name into the name parameter of the greeting() method.
     * This query string parameter is not required; if it is absent in the request, the defaultValue of "World" is used.
     *
     * @param name
     * @return
     */
    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", required=false, defaultValue="World") String name) {
        /**
         * The implementation of the method body creates and returns a new Greeting object with id and content attributes
         * based on the next value from the counter, and formats the given name by using the greeting template.
         */
        return new Greeting(counter.incrementAndGet(), String.format(template, name));

    }
}
