/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',

    requires: [
        'MyApp.*'
    ],
    launch: function () {
        viewport = Ext.getCmp('viewport');
        target = viewport.down('#viewport-target');
        view= Ext.create('MyApp.view.main.Main');
        target.add(view)
    },

    // The name of the initial view to create.
    mainView: 'MyApp.view.main.Extra',
    autoCreateViewport: true,
});
