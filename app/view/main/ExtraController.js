Ext.define("MyApp.view.main.ExtraController", {
  extend: "Ext.app.ViewController",

  alias: "controller.extra",
  
  init: function () {
    this.control({
      "#addNewView": {
        click: "callonClick",
      },
    });
  },
  callonClick:function(){
    alert('added')
  }
});
