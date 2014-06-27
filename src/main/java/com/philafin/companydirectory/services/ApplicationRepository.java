package com.philafin.companydirectory.services;

import com.philafin.companydirectory.model.Application;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 */
@Repository
public interface ApplicationRepository extends CrudRepository<Application, Long> {

    @Query("select c from Application c where  c.name LIKE :name")
    List<Application> search(@Param("name") String name);
}
