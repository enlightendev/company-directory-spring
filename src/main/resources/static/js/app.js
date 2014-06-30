Ext.application({

    name: 'CD',
    appFolder: 'js/app',

    views: [
    ],

    models: [
        //'Employee' //un-commenting generates error ???
    ],

    stores: [
        'ApplicationStore'
    ],

    controllers: [
        'ApplicationController'
    ],

    launch : function() {

        Ext.create('CD.view.MainView');
        //Ext.Msg.alert("Hello dude","EXT JS dude!!!");
    }
});
