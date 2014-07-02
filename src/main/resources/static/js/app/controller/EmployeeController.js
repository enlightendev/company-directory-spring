/**
 * Created by Juan on 5/29/14.
 */
Ext.define('CD.controller.EmployeeController', {
    extend: 'Ext.app.Controller',

    stores: [
        'EmployeeStore'
    ],

    views: [
        'employee.DetailPanel',
        'employee.EmployeeForm',
        'employee.EmployeeGrid'
    ],

    refs: [
        {
            ref: 'detailsPanel',
            selector: '#detailsPanel'
        },
        {
            ref: 'detailsToolbar',
            selector: '#detailsPanel #detailsToolbar'
        }
    ],

    init: function(application) {

        this.control({

            "#mainPanel #addButton": { //itemId: 'mainPanel'
                click: this.add
            },

            "#employeeForm #saveButton": { //itemId: 'employeeForm',
                click: this.save
            },

            "#employeeForm #cancelButton": {
                click: this.cancelEdit
            },

            "#employeeGridPanelItemId": {
                select: this.view
            },

            "#detailsPanel #editButton": {
                click: this.edit
            },

            "#detailsPanel #removeButton": {
                click: this.remove
            },

            "#employeeForm #cancelButton": {
                click: this.cancelEdit
            }

        });
    },

    add: function(target) {

        var formWindow = Ext.create('widget.employeeform'),	// Create new form window
            form = formWindow.down('form').getForm(),		// Get form within window
            model = Ext.create('model.employee');			// Create new Record model - alias: 'model.employee',

        // Associate model with form
        form.loadRecord(model);

        // Show window
        formWindow.show();

    },

    edit: function(target) {

        var data = target.up('panel').data,						// Get panel's assosiated data
            store = this.getEmployeeStoreStore(),				// Get Records store
            record = store.getById(data.id),					// Get current record
            formWindow = Ext.create('widget.employeeform'),		// Create new form window
            form = formWindow.down('form').getForm();			// Get form within window

        record.set('tags', record.get('tags').split(",")) ;
        // Load record model into form
        form.loadRecord(record);

        // Show window
        formWindow.show();

    },

    cancelEdit: function(target) {

        // Get the window and close it
        var formWindow = target.up("window");
        formWindow.destroy();

    },

    save: function(target) {

        var form = target.up('form').getForm(),			// Get parent form
            formWindow = target.up('window'),			// Get parent window
            detailsPanel = this.getDetailsPanel(),		// Get details panel
            detailsToolbar = this.getDetailsToolbar(),	// Get detail panel toolbar
            record = form.getRecord(),					// Get record associated with form
            store = this.getEmployeeStoreStore(),	    // Get Employee store
            values = form.getValues();

        // Valid
        if (form.isValid()) {

            record.set(values);
            record.set('tags', record.get('tags').join(",")) ;

            //if type is a string it is a new record with an extjs generated id.
            var isNew = (typeof record.get('id') === 'string');

            // Add to store if new record
            if (isNew) {
                record.set('id',null);
                store.add(record);
            }

            // sync changes
            store.sync();

            // Update detail panel
            var name = this.lookupManager(record.get('manager_id'));
            //detailsPanel.update(record.data);
            detailsPanel.update({

                id: record.get('id'),
                fname: record.get('fname'),
                lname: record.get('lname'),
                title: record.get('title'),
                department: record.get('department'),
                phone_cell: record.get('phone_cell'),
                tags: record.get('tags'),
                manager: name

            });

            // Close window
            formWindow.destroy();

        } else { // Invalid

            // Show errors on form
            form.markInvalid(errors);

        }

    },

    remove: function(target) {

        var me = this;

        // Confirm this delete
        Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this record?', function(btn) {

            // User confirmed yes
            if (btn == 'yes') {

                var data = target.up('panel').data,				// Get assosiated data
                    store = me.getEmployeeStoreStore(),			// Get Records store
                    record = store.getById(data.id),			// Get current record
                    detailsPanel = me.getDetailsPanel(),		// Get details panel
                    detailsToolbar = me.getDetailsToolbar();	// Get details panel toolbar

                // Delete from store
                store.remove(record);

                store.sync();

                // Clear panel content
                detailsPanel.update(null);

                // Hide toolbar
                detailsToolbar.hide();

            }

        });

    },

    view: function(target, record) {

        var details = this.getDetailsPanel(),	// Get detail panel via controller ref
            toolbar = this.getDetailsToolbar();	// Get detail panel toolbar via controller ref

        var name = this.lookupManager(record.get('manager_id'));

        // Update the detail panel with the selected row's data
        //details.update(record.data);

        details.update({

            id: record.get('id'),
            fname: record.get('fname'),
            lname: record.get('lname'),
            title: record.get('title'),
            department: record.get('department'),
            phone_cell: record.get('phone_cell'),
            tags: record.get('tags'),
            manager: name

        });

        // Show toolbar
        toolbar.show();

    },

    lookupManager: function(manager_id) {

        var store = this.getEmployeeStoreStore();

        //lookup manager using the manager_id
        var manager = store.findRecord('id', manager_id);
        var name = '';

        //get the manager name
        if(!manager){
            name = 'none'
        }else{
            name = manager.get('lname') + ", " + manager.get('fname');
        }

        return name;

    }

});