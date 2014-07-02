package com.philafin.companydirectory.serializers;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.philafin.companydirectory.model.Employee;

import java.io.IOException;

/**
 *
 */
public class EmployeeSerializer extends JsonSerializer<Employee> {

    @Override
    public void serialize(Employee employee, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException, JsonProcessingException {

        jsonGenerator.writeStartObject();
        jsonGenerator.writeNumberField("id", employee.getId());
        jsonGenerator.writeStringField("fname", employee.getFname());
        jsonGenerator.writeStringField("lname", employee.getLname());
        jsonGenerator.writeNumberField("manager_id", employee.getManager_id());
        jsonGenerator.writeStringField("title", employee.getTitle());
        jsonGenerator.writeStringField("department", employee.getDepartment());
        jsonGenerator.writeStringField("phone_cell", employee.getPhone_cell());
        jsonGenerator.writeStringField("phone_home", employee.getPhone_home());
        jsonGenerator.writeStringField("phone_office", employee.getPhone_office());
        jsonGenerator.writeStringField("email", employee.getEmail());
        jsonGenerator.writeStringField("tags", employee.getTags());
        jsonGenerator.writeBooleanField("is_manager", employee.isIs_manager());
        jsonGenerator.writeEndObject();

    }

}