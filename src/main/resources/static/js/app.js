Ext.application({

    name: 'CD',
    appFolder: 'js/app',

    views: [
    ],

    models: [
        //'Employee' //un-commenting generates error ???
    ],

    stores: [
        'ApplicationStore',
        'EmployeeStore',
        'TagStoreInMemory'
    ],

    controllers: [
        'ApplicationController',
        'EmployeeController'
    ],

    launch : function() {

        Ext.create('CD.view.MainView');
        //Ext.Msg.alert("Hello dude","EXT JS dude!!!");
    }
});
