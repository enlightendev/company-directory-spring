package com.philafin.companydirectory.model;


import com.philafin.companydirectory.Main;
import com.philafin.companydirectory.services.EmployeeRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@Transactional
@SpringApplicationConfiguration(classes = Main.class)
public class EmployeeRepositoryTests {

    @Autowired
    EmployeeRepository employeeRepository;

    @Test
    public void findByLastName() {

        List<Employee> employees = employeeRepository.searchByLastName("lamadrid");

        int size = employees.size();

        assertThat(size, is(1));
    }

}
