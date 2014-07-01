Ext.define('CD.store.ApplicationStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CD.model.Application',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: {
                callback: function(){
                    console.log('Autoload application store ');
                }
            },

            autoSync: false,
            model: 'CD.model.Application',
            storeId: 'applicationStoreId',
            proxy: {
                type: 'rest',
                url: '/api/applications',
                reader: {
                    type: 'json',
                    rootProperty: ''
                },

                /**
                 *needed to add writer to control how form submits are posted. Specifically
                 * needed to set writeAllFields to true so spring data repository does not update
                 * entity with a bunch of blank fields. Rails was able to detect the fact
                 * that some fields were not changed. Spring on the other hand makes them all null.
                 */
                writer: {
                    type: 'json',
                    writeAllFields: true,
                    rootProperty: '',
                    encode: false
                }
            }
        }, cfg)]);
    }
});