Ext.define("MyApp.view.main.Extra", {
  extend: "Ext.container.Container",
  controller: 'extra',
  xtype: "extra",
  items: [
    {
      title: "Extra View",
      html: "Do you want to add a new view to your application?",
    },
    {
        xtype: "button",
        name: "click",
        text: 'add new view',
        itemId: "addNewView"
      },
  ],
});
 