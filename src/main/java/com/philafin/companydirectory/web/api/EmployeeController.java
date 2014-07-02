package com.philafin.companydirectory.web.api;

import com.google.common.collect.Lists;
import com.philafin.companydirectory.model.Employee;
import com.philafin.companydirectory.services.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Iterator;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/**
 * NOTE: At initial creation of this controller I opted to avoid the service layer and have the controller call the
 * repository directly. At that time the service layer was wrapping repository calls one for one and thus not adding
 * any value - no multi domain entity coordination/processing, no transaction boundaries needed, etc.
 *
 */
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    @RequestMapping("/employees")
    public List<Employee> getEmployees(){

        Iterator<Employee> iterator = employeeRepository.findAll().iterator();
        return Lists.newArrayList(iterator);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/employees")
    Employee createEmployee(@RequestBody Employee employee) {

        employeeRepository.save(employee);

        return employee;

    }

    @RequestMapping(method = GET, value = "/employees/{id}")
    Employee loadEmployee(@PathVariable Long id) {
        return employeeRepository.findOne(id);
    }


    @RequestMapping(method = RequestMethod.PUT, value = "/employees/{id}")
    Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {

        employeeRepository.save(employee);

        return employee;

    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/employees/{id}")
    public Employee deleteEmployee(@PathVariable Long id){

        Employee employee = employeeRepository.findOne(id);
        employeeRepository.delete(id);

        return employee;

    }
}