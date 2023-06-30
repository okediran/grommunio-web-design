// Ext.Loader.loadCssFile('resources/css/grommunio.scss');

Ext.define("MyApp.view.Viewport", {
  extend: "Ext.container.Viewport",
  // layout: 'fit',
  id: "viewport",
  items: [
      {
        region: "north",
        xtype: 'navbar', // Assuming you have defined a custom xtype for the navbar component
        // cls: 'my-navbar'     
      },
    {
      region: "center",
      // xtype: "tabpanel",
      activeTab: 0,
      itemId: "viewport-target",
    },
    // { region: "south", html: "<h1>Footer Part</h1>" },
  ],
});
