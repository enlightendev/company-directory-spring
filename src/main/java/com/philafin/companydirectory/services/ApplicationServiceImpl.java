package com.philafin.companydirectory.services;

import com.philafin.companydirectory.model.Application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Iterator;
import java.util.List;

/**
 *
 */
@Service
@Transactional
public class ApplicationServiceImpl implements ApplicationService {

    private final ApplicationRepository applicationRepository;

    @Autowired
    public ApplicationServiceImpl(ApplicationRepository applicationRepository){
        this.applicationRepository = applicationRepository;
    }

    @Override
    public Application getApplication(Long id) {
        return applicationRepository.findOne(id);
    }

    @Override
    public Application updateApplication(Application application) {
        return applicationRepository.save(application);
    }

    @Override
    public Iterator<Application> getApplications() {
        return applicationRepository.findAll().iterator();
    }

    @Override
    public List<Application> search(String name) {
        return applicationRepository.search(name);
    }
}