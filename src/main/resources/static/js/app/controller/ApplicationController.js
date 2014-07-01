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

    config: {
        selectedApplication: null
    },

    init: function(application) {

        this.control({

            "#applicationGridItemId": {
                itemdblclick: this.editApplication,
                selectionchange: this.selectedApplication
            },

            '#applicationFormItemId button[action=save]': {
                click: this.saveApplication
            },

            "#applicationsToolbar #deleteButton": {
                click: this.deleteApplication
            }

        });
    },


    editApplication: function(grid, record) {
        var edit = Ext.create('widget.applicationform').show();

        edit.down('form').loadRecord(record);
    },

    selectedApplication: function(selectionModel, record, eOPts) {

        this.setSelectedApplication(record);

    },

    saveApplication: function(button) {

        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();

        this.getApplicationStoreStore().sync();
    },


    deleteApplication: function(target) {

        var me = this;

        // Confirm this delete
        Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this record?', function(btn) {

            // User confirmed yes
            if (btn == 'yes') {

                var store = me.getApplicationStoreStore(),
                    record = me.getSelectedApplication();

                // Delete from store
                store.remove(record);

                store.sync();

            }

        });
    }

});