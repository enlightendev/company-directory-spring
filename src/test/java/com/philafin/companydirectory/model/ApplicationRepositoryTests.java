package com.philafin.companydirectory.model;


import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.runner.RunWith;

import com.philafin.companydirectory.Main;
import com.philafin.companydirectory.services.ApplicationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@Transactional
@SpringApplicationConfiguration(classes = Main.class)
public class ApplicationRepositoryTests {

    @Autowired
    ApplicationRepository applicationRepository;

    @Test
    public void findsByName() {

        List<Application> applications = applicationRepository.search("solar");

        int size = applications.size();

        assertThat(size, is(1));
    }

    @Test
    public void findsByID() {

        Application application = applicationRepository.findOne(1L);

        assertThat(application.getApp_type(), is("desktop"));
        assertThat(application.getName(), is("solar"));
    }

}
