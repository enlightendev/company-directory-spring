package com.philafin.companydirectory.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 *
 */
@Controller
public class AppController {

    @Value("${application.name:Default App}")
    private String message = "";

    @RequestMapping("/")
    public String home(Map<String, Object> model) {

        model.put("name", this.message);

        return "home";
    }
}
