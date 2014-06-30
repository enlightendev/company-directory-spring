/**
 *
 */
Ext.define('CD.controller.ApplicationController', {
    extend: 'Ext.app.Controller',

    stores: [
        'ApplicationStore'
    ],

    views: [
        'application.ApplicationForm',
        'application.ApplicationGrid',
        'application.ApplicationMainView'
    ],

    refs: [

    ],

    init: function(application) {

        this.control({

            "#applicationGridItemId": {
                itemdblclick: this.editApplication
            },

            '#applicationFormItemId button[action=save]': {
                click: this.saveApplication
            }

        });
    },


    editApplication: function(grid, record) {
        var edit = Ext.create('widget.applicationform').show();

        edit.down('form').loadRecord(record);
    },

    saveApplication: function(button) {

        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();

        this.getApplicationStoreStore().sync();
    }

});