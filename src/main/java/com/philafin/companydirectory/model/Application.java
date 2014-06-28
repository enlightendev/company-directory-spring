package com.philafin.companydirectory.model;

import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.philafin.companydirectory.serializers.ApplicationSerializer;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.util.Date;

/**
 * AbstractPersistable = abstract base class for entities.
 * Allows parameterization of id type, chooses auto-generation and implements
 * {@link #equals(Object)} and {@link #hashCode()} based on that id.
 *
 */
@Entity
@Table (name = "applications")
@JsonSerialize(using = ApplicationSerializer.class)
@JsonRootName(value = "applications")
public class Application extends AbstractPersistable<Long> {

    @Column(unique = true)
    private String name;

    private String app_type;

    private String description;

    private String technical_owner;

    private String home_page;

    private String ticket_url;

    private String documentation_url;

    private String business_owner;

    private Date created_at;

    private Date updated_at;

    public Application(){

        this(null);
    }

    public Application(Long applicationId){
        this.setId(applicationId);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getApp_type() {
        return app_type;
    }

    public void setApp_type(String app_type) {
        this.app_type = app_type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTechnical_owner() {
        return technical_owner;
    }

    public void setTechnical_owner(String technical_owner) {
        this.technical_owner = technical_owner;
    }

    public String getHome_page() {
        return home_page;
    }

    public void setHome_page(String home_page) {
        this.home_page = home_page;
    }

    public String getTicket_url() {
        return ticket_url;
    }

    public void setTicket_url(String ticket_url) {
        this.ticket_url = ticket_url;
    }

    public String getDocumentation_url() {
        return documentation_url;
    }

    public void setDocumentation_url(String documentation_url) {
        this.documentation_url = documentation_url;
    }

    public String getBusiness_owner() {
        return business_owner;
    }

    public void setBusiness_owner(String business_owner) {
        this.business_owner = business_owner;
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
