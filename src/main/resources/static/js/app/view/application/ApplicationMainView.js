Ext.define('CD.view.application.ApplicationMainView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.applicationmainview',

    requires: [
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'applicationGrid',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }

});