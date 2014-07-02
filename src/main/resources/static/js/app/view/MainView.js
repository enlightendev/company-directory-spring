/*
 * File: app/view/MainView.js
 *
 */
Ext.define('CD.view.MainView', {
    extend: 'Ext.container.Viewport',

    id: 'mainView',
    layout: 'fit',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Employees',
                            itemId: 'mainPanel',
                            resizable: false,
                            layout: 'border',
                            collapsed: false,
                            manageHeight: false,
                            title: 'Employees',
                            items: [
                                {
                                    xtype: 'employeeGrid',
                                    flex: 1,
                                    region: 'west',
                                    split: true
                                },
                                {
                                    xtype: 'detailPanel',
                                    flex: 1,
                                    region: 'center',
                                    split: true
                                }
                            ]
                        },
                        {
                            title: 'Applications',
                            xtype: 'applicationmainview'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});