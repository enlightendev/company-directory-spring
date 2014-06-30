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