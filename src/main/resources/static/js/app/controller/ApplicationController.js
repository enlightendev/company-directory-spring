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
            },

            "#applicationsToolbar #createButton": {
                click: this.addApplication
            }

        });
    },

    addApplication: function(target) {

        var formWindow = Ext.create('widget.applicationform'),	// Create new form window
            form = formWindow.down('form').getForm(),		    // Get form within window
            model = Ext.create('model.application');			// Create new Record model - alias: 'model.application',

        // Associate model with form
        form.loadRecord(model);

        // Show window
        formWindow.show();

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
            values = form.getValues(),
            store  = this.getApplicationStoreStore();

        if (form.isValid()) {

            record.set(values);

            //if type is a string it is a new record with an extjs generated id.
            var isNew = (typeof record.get('id') === 'string');

            // Add to store if new record
            if (isNew) {
                //need to set id to null to replace extjs generated string id for new entity.
                record.set('id',null);

                store.add(record);
            }

            store.sync();
            win.close();

        } else { // Invalid

            // Show errors on form
            form.markInvalid(errors);

        }
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