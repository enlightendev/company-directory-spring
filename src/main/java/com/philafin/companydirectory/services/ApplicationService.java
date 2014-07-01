package com.philafin.companydirectory.services;

import com.philafin.companydirectory.model.Application;

import java.util.Iterator;
import java.util.List;

/**
 *
 */
public interface ApplicationService {

    Application getApplication(Long id);

    Application deleteApplication(Long id);

    Application updateApplication(Application application);

    Application createApplication(Application application);

    Iterator<Application> getApplications();

    List<Application> search(String name);



}
