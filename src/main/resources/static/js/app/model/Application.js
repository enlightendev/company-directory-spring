Ext.define('CD.model.Application', {
    extend: 'Ext.data.Model',
    alias: 'model.application',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'name'
        },
        {
            name: 'app_type'
        },
        {
            name: 'description'
        },
        {
            name: 'technical_owner'
        },
        {
            name: 'home_page'
        },
        {
            name: 'ticket_url'
        },
        {
            name: 'documentation_url'
        },
        {
            name: 'business_owner'
        },
        {
            name: 'created_at',
            type: 'date'
        },
        {
            name: 'updated_at',
            type: 'date'
        }
    ]
});