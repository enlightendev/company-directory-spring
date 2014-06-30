Ext.define('CD.view.application.ApplicationForm', {
    extend: 'Ext.window.Window',
    alias : 'widget.applicationform',

    requires: ['Ext.form.Panel'],

    title : 'Application',
    layout: 'fit',
    autoShow: true,
    width: 450,
    itemId: 'applicationFormItemId',

    initComponent: function() {

        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',

                    defaultType: 'textfield',
                    fieldDefaults: {
                        labelWidth: 90
                    },

                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },

                    bodyPadding: 5,
                    border: false,

                    style: 'background-color: #fff;',

                    items: [
                        {
                            xtype: 'textfield',
                            name : 'name',
                            fieldLabel: 'Name'
                        },
                        {
                            xtype: 'textfield',
                            name : 'home_page',
                            fieldLabel: 'Home Page'
                        },
                        {
                            xtype: 'textfield',
                            name : 'technical_owner',
                            fieldLabel: 'Technical Owner'
                        },
                        {
                            xtype: 'textarea',
                            name : 'description',
                            fieldLabel: 'Description',
                            // Setting flex to 1 for textarea when no other component has flex
                            // is effectively tells the layout to strech the textarea vertically,
                            // taking all the space left after the fields above have been laid out.
                            flex: 1
                        }
                    ]
                }
            ],

            buttons:[
                {
                    text: 'Save',
                    action: 'save'
                },
                {
                    text: 'Cancel',
                    scope: this,
                    handler: this.close
                }
            ]

        });

        me.callParent(arguments);
    }
});
