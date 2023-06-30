Ext.define('MyApp.view.main.Navbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'navbar',
    height: "100px",
    padding: '30px, 60px, 20px, 60px',
    items: [
        {
          xtype: "component",
          html: "<img src='../../../../resources/image/grommunio_logo_default.d767b4c136a6516bb8b1a8d1788710c7-2.png' alt='Logo' height='53.74px' width='238px'>",
        },
        "->",
        {
          xtype: "button",
          iconCls: 'fa-envelope',
          text: "Mail",
          padding: "12px",
          fontSize:'18px',
          style: {
            backgroundColor: "transparent",
            border:'none',
          }
        },
        {
          xtype: "button",
          iconCls: 'fa-calendar',
          text: "Calender",
          padding: "12px",
          style: {
            backgroundColor: "transparent",
            border:'none',
          }
        },
        {
          xtype: "button",
          iconCls: 'fa-users',
          text: "Contacts",
          padding: "12px",
          style: {
            backgroundColor: "transparent",
            border:'none',
          }
        },
        ,
        {
          xtype: "button",
          text: "Task",
          iconCls: 'fa-clipboard-check',
          padding: "12px",
          style: {
            backgroundColor: "transparent",
            border:'none',
          }
        },
        ,
        {
          xtype: "button",
          iconCls: 'fa-clone',
          text: "Files",
          padding: "12px",
          style: {
            backgroundColor: "transparent",
            border:'none',
          }
        },
        "->",
        {
          xtype: "button",
          iconCls: 'fa-cog',
          class: "faStyling",
          style: {
            backgroundColor: "transparent",
            border:'none',
            padding: "12px",
            style: {
              backgroundColor: "transparent",
              border:'none',
            }
          }
        },
        {
          xtype: "button",
          iconCls: 'fa-question-circle',
          class: "faStyling",
          padding: "12px",
          style: {
            backgroundColor: "transparent",
            border:'none',
          }
        },
        {
          xtype: "component",
        //   padding: "12px",
          html:"<p>YF</p>",
          style:{
            background: 'linear-gradient(#1563B5,#0299F6) !important',
            colour: "#ffffff !important",
            borderRadius: '100px',
            height:'56px',
            width:'56px',
            fontSize:'20px',
            fontWeight: '600',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff'
          },
        },
      ],

  });

  