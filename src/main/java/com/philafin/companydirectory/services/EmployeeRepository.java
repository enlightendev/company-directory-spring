package com.philafin.companydirectory.services;

import com.philafin.companydirectory.model.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 */
@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

    @Query("select c from Employee c where  c.lname LIKE :lname")
    List<Employee> searchByLastName(@Param("lname") String lname);
}
