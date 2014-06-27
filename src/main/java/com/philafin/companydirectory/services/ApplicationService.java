package com.philafin.companydirectory.services;

import com.philafin.companydirectory.model.Application;

import java.util.Iterator;
import java.util.List;

/**
 *
 */
public interface ApplicationService {

    Application getApplication(Long id);

    Iterator<Application> getApplications();

    List<Application> search(String name);

}
