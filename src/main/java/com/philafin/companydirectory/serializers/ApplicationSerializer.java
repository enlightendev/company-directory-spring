package com.philafin.companydirectory.serializers;


import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.philafin.companydirectory.model.Application;

import java.io.IOException;

/**
 *
 */
public class ApplicationSerializer extends JsonSerializer<Application> {

    @Override
    public void serialize(Application application, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException, JsonProcessingException {

        jsonGenerator.writeStartObject();
        jsonGenerator.writeNumberField("id", application.getId());
        jsonGenerator.writeStringField("name", application.getName());
        jsonGenerator.writeStringField("app_type", application.getApp_type());
        jsonGenerator.writeStringField("description", application.getDescription());
        jsonGenerator.writeStringField("technical_owner", application.getTechnical_owner());
        jsonGenerator.writeStringField("ticket_url", application.getTicket_url());
        jsonGenerator.writeStringField("documentation_url", application.getDocumentation_url());
        jsonGenerator.writeStringField("business_owner", application.getBusiness_owner());
        jsonGenerator.writeEndObject();

    }

}