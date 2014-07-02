/**
 * Created by Juan on 6/3/14.
 */
Ext.define('CD.view.employee.DetailPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.detailPanel',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Separator',
        'Ext.XTemplate'
    ],

    itemId: 'detailsPanel',

    split: true,
    border: '2 2 2 2',
    resizable: false,
    layout: 'fit',
    region: 'center',
    bodyBorder: true,
    bodyPadding: '10 10 10 10',
    manageHeight: false,

    initComponent: function () {

        var me = this;

        Ext.applyIf(me, {

            data: {
                id: null,
                fname: '',
                lname: '',
                title: '',
                department: '',
                phone_cell: '',
                tags: '',
                manager: ''
            },

            tpl: [
                '<tpl if="values.id">',
                '    <h2>{lname}, {fname}</h2>',
                '    <p><b>Title/Dept:</b> &nbsp; {title} ({department})</p>',
                '    <p><b>Cell Phone:</b> &nbsp; {phone_cell}</p>',
                '    <p><b>Tags:</b> &nbsp; {tags}</p>',
                '    <p><b>Reports To:</b> &nbsp; {manager}</p>',
                '</tpl>',
                '',
                '<tpl if="!values.id">',
                '    <h3>Please select a record</h3>',
                '</tpl>'
            ],

            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    hidden: true,
                    itemId: 'detailsToolbar',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'editButton',
                            icon: 'extjs/edit.png',
                            text: 'Edit'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'removeButton',
                            icon: 'extjs/user_delete.gif',
                            text: 'Delete'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});