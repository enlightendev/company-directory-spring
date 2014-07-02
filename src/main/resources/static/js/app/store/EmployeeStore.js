/**
 * Created by Juan on 5/29/14.
 */
Ext.define('CD.store.EmployeeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CD.model.Employee',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: {
                callback: function(){
                    console.log('Autoload employee store ');

                    var employee = this.first();
                    console.log("Employee Name: " + employee.get('fname') + " " + employee.get('new'));
                }
            },

            groupField:'department',

            autoSync: false,
            model: 'CD.model.Employee',
            storeId: 'employeeStoreId',
            proxy: {
                type: 'rest',
                url: '/api/employees',
                reader: {
                    type: 'json',
                    rootProperty: ''
                },

                /**
                 *needed to add writer to control how form submits are posted. Specifically
                 * needed to set writeAllFields to true so spring data repository does not update
                 * entity with a bunch of blank fields. Rails was able to detect the fact
                 * that some fields were not changed. Spring on the other hand makes them all null.
                 */
                writer: {
                    type: 'json',
                    writeAllFields: true,
                    rootProperty: '',
                    encode: false
                }
            }
        }, cfg)]);
    }
});