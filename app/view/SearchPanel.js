Ext.define('CompanyApp.view.SearchPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'search-panel',
    requires:[
        
    ],
    
    layout: {
        type: 'vbox',
        align: 'center'
    },
//    margin: '20 5 0 5',
    items: [
        {
            xtype: 'textfield',
            name: 'title',
            fieldLabel: 'Titlu',
            margin: '5 5 5 5',
            myId: 'title-input-search'
        },
        {
            xtype: 'textfield',
            name: 'address',
            fieldLabel: 'Adresa',
            margin: '5 5 5 5',
            myId: 'address-input-search'
        },
        {
            xtype: 'textfield',
            name: 'director',
            fieldLabel: 'Conducatorul',
            margin: '5 5 5 5',
            myId: 'director-input-search'
        }
    ]
});