/**
 * Created by Juan on 5/29/14.
 */
Ext.define('CD.model.Employee', {
    extend: 'Ext.data.Model',
    alias: 'model.employee',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'fname'
        },
        {
            name: 'lname'
        },
        {
            name: 'manager_id',
            type: 'int'
        },
        {
            name: 'title'
        },
        {
            name: 'department'
        },
        {
            name: 'phone_cell'
        },
        {
            name: 'phone_home'
        },
        {
            name: 'phone_office'
        },
        {
            name: 'email'
        },
        {
            name: 'tags'
        },
        {
            name: 'is_manager',
            type: 'boolean'
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