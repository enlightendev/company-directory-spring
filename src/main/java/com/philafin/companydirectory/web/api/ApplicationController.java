package com.philafin.companydirectory.web.api;

import com.google.common.collect.Lists;
import com.philafin.companydirectory.model.Application;
import com.philafin.companydirectory.services.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
