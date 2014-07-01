Ext.define('CD.view.application.ApplicationGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.applicationGrid',

    store: 'ApplicationStore',
    itemId: 'applicationGridItemId',


    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'name',
                    text: 'Name',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'app_type',
                    text: 'Type',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    dataIndex: 'description',
                    text: 'Description',
                    editor: {
                        xtype: 'textfield'
                    }
                }
            ],

            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    hidden: false,
                    itemId: 'applicationsToolbar',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'deleteButton',
                            icon: 'extjs/application_delete.gif',
                            text: 'Delete'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});