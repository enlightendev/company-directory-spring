/**
 * Created by Juan on 5/31/14.
 */
Ext.define('CD.store.TagStoreInMemory', {
    extend: 'Ext.data.Store',

    requires: [
        'CD.model.Tag',
        'Ext.data.proxy.Memory'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'CD.model.Tag',
            storeId: 'tagStoreInMemoryID',
            autoLoad: 'true',
            data: [
                {
                    tag: 'solar',
                    description: 'any involvement with solar'
                },
                {
                    tag: 'manager-apl',
                    description: 'managers responsible for resources working on apl related applications: solar, frs, etc'
                },
                {
                    tag: 'manager-applications',
                    description: 'managers responsible for resources working on applications: fmdb, reportal, etc'
                },
                {
                    tag: 'nightly-support',
                    description: 'individuals assigned to support night time operations.'
                },
                {
                    tag: 'on-call',
                    description: 'individuals on call.'
                },
                {
                    tag: 'fmdb',
                    description: 'application that manages fund data for marketing, etc'
                },
                {
                    tag: 'reportal',
                    description: 'application that provides reports to brokers, clients, etc'
                },
                {
                    tag: 'applications',
                    description: 'any individual that provides application support'
                },
                {
                    tag: 'pmo',
                    description: 'any individual working within pmo'
                },
                {
                    tag: 'citrix',
                    description: 'any individual that provides citrix support'
                },
                {
                    tag: 'finance',
                    description: 'any individual that provides finance support'
                },
                {
                    tag: 'accounting',
                    description: 'any individual that provides accounting support'
                },
                {
                    tag: 'monthly-close',
                    description: 'any individual involved in monthly close'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});