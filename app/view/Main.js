Ext.define('CompanyApp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'CompanyApp.view.CompanyGrid',
        'CompanyApp.view.SearchPanel',
        'CompanyApp.view.InputPanel'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 300,
        items: [
            {
                xtype: 'search-panel'
            }
        ]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[
            {
                title: 'Info company',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'company-grid'
                    }   
                ]
            },
            {
                title: 'Input type',
                layout: {
                    type: 'vbox',
                    align: 'left'
                },
                items: [
                    {
                        xtype: 'input-panel'
                    }   
                ]
            },
        ]
    }]
});