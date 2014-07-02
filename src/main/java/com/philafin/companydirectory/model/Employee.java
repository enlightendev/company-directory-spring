package com.philafin.companydirectory.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.philafin.companydirectory.serializers.EmployeeSerializer;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

/**
 *
 */
@Entity
@Table(name = "employees")
@JsonSerialize(using = EmployeeSerializer.class)
public class Employee extends AbstractPersistable<Long> {

    private String fname;

    private String lname;

    private Long manager_id;

    private String title;

    private String department;

    private String phone_cell;

    private String phone_home;

    private String phone_office;

    private String email;

    private String tags;

    private boolean is_manager;

    private Date created_at;

    private Date updated_at;

    public Employee(){}

    public Employee(Long employeeId){
        this.setId(employeeId);
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public Long getManager_id() {
        return manager_id;
    }

    public void setManager_id(Long manager_id) {
        this.manager_id = manager_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getPhone_cell() {
        return phone_cell;
    }

    public void setPhone_cell(String phone_cell) {
        this.phone_cell = phone_cell;
    }

    public String getPhone_home() {
        return phone_home;
    }

    public void setPhone_home(String phone_home) {
        this.phone_home = phone_home;
    }

    public String getPhone_office() {
        return phone_office;
    }

    public void setPhone_office(String phone_office) {
        this.phone_office = phone_office;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public boolean isIs_manager() {
        return is_manager;
    }

    public void setIs_manager(boolean is_manager) {
        this.is_manager = is_manager;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Date updated_at) {
        this.updated_at = updated_at;
    }
}
