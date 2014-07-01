package com.philafin.companydirectory.web.api;

import com.google.common.collect.Lists;
import com.philafin.companydirectory.model.Application;
import com.philafin.companydirectory.services.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.Iterator;
import java.util.List;

/**
 *
 */
@RestController
@RequestMapping("/api")
public class ApplicationController {

    @Autowired
    ApplicationService applicationService;

    @RequestMapping("/applications")
    public List<Application> getApplications(){

        Iterator<Application> iterator = applicationService.getApplications();
        return Lists.newArrayList(iterator);
    }

    @RequestMapping(method = GET, value = "/applications/{id}")
    Application loadApplication(@PathVariable Long id) {
        return applicationService.getApplication(id);
    }


    @RequestMapping(method = RequestMethod.PUT, value = "/applications/{id}")
    Application updateApplication(@PathVariable Long id, @RequestBody Application application) {

        applicationService.updateApplication(application);

        return application;

    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/applications/{id}")
    public Application deleteApplication(@PathVariable Long id){

        return applicationService.deleteApplication(id);

    }
}