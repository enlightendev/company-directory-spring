Ext.define('CD.view.employee.EmployeeGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.employeeGrid',


    border: '2 2 2 2',
    itemId: 'employeeGridPanelItemId',
    id: 'employeeGridPanel', //this id is used in Ext.getCmp("employeeGridPanel") inside template
    width: 150,
    resizable: false,
    bodyBorder: true,
    forceFit: true,
    store: 'EmployeeStore',

    collapsible: false,
    animCollapse: false,


    /**
     * This is called from within the group by template of the grid
     * @param value
     * @returns {*}
     */
    getGroupByValue: function(value){

        var grid = Ext.getCmp("employeeGridPanel");
        var groupField = grid.features[0].getGroupField();

        if(groupField == 'department'){
            return value.name;
        }else if(groupField == 'manager_id') {
            var manager_id = value.children[0].get('manager_id');

            if (manager_id <= 0) {
                return "No manager";
            } else {
                var store = Ext.getStore('EmployeeStore');
                var record = store.findRecord("id", manager_id);
                return record.get('lname');
            }
        }else if(groupField == 'title'){
            return value.children[0].get('title');
        }else{
            return " ";
        }
    },

    initComponent: function() {
        var me = this;

        var cmbGroupingChoices = new Ext.form.field.ComboBox({
            queryMode: 'local',
            id: 'cmbGroupingChoices',
            store: new Ext.data.ArrayStore({
                //id: 0,
                fields: [
                    'entityColumn',  // numeric value is the key
                    'displayText'
                ],
                data: [['department', 'Department'], ['manager_id', 'Manager']]  // data is local
            }),

            valueField: 'entityColumn',

            //set the initial selection.
            value: 'department',

            fieldLabel: 'Group By',
            displayField: 'displayText',
            triggerAction: 'all',
            labelAlign: 'right',
            listeners: {
                select: function(combo, record, index) {
                    var store = Ext.getStore('EmployeeStore');
                    store.group(record[0].get('entityColumn'));
                }
            }
        });

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'fname',
                    text: 'First Name',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lname',
                    text: 'Last Name',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'title',
                    text: 'Title',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'department',
                    text: 'Dept',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'created_at',
                    text: 'Date',
                    editor: {
                        xtype: 'datefield'
                    }
                }
            ],

            plugins: [
                Ext.create('Ext.grid.plugin.RowEditing', {

                })
            ],


            features:[Ext.create('Ext.grid.feature.Grouping', {
                //groupHeaderTpl: '{[Ext.getCmp("cmbGroupingChoices").getRawValue()]}: {groupValue}, {rows.length}'
                //groupHeaderTpl: '{groupValue}, {rows.length}'
                groupHeaderTpl: '{[Ext.getCmp("employeeGridPanel").getGroupByValue(values)]}, {rows.length}'
            })],

            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    itemId: 'bottomToolbar',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'addButton',
                            icon: 'extjs/user_add.gif',
                            text: 'Add Employee'
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    itemId: 'mainToolbar',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Search Name:',
                            labelAlign: 'right',
                            listeners: {
                                change: function(field, newValue, oldValue) {
                                    var store = Ext.getStore('EmployeeStore');

                                    if(!newValue || newValue.length <= 0){
                                        store.clearFilter();
                                    }else{
                                        store.filterBy(function(record){
                                            var fullName = record.get('fname') +  record.get('lname');
                                            return fullName.indexOf(newValue) > -1
                                        });
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Search tags:',
                            labelAlign: 'right',
                            listeners: {
                                change: function(field, newValue, oldValue) {
                                    var store = Ext.getStore('EmployeeStore');
                                    if(!newValue || newValue.length <= 0){
                                        store.clearFilter();
                                    }else{
                                        store.filterBy(function(record){
                                            return record.get('tags').indexOf(newValue) > -1
                                        });
                                    }
                                }
                            }
                        },
                        cmbGroupingChoices
                    ]
                }
            ]

        });

        me.callParent(arguments);
    }

});