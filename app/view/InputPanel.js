Ext.define('CompanyApp.view.InputPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'input-panel',
    requires:[
        
    ],
    
    layout: {
        type: 'vbox',
        align: 'left'
    },
    margin: '20 0 0 10',    
    width: 500,

    items: [
        {
            xtype: 'textfield',
            name: 'title',
            fieldLabel: 'Textfield input',
            margin: '5',
        },
//        ************** Checkbox
        {
            boxLabel  : 'Valoarea 1',
            name      : 'topping',
            inputValue: '1',
            xtype: 'checkbox',
            margin: '5'
        }, {
            boxLabel  : 'Valoarea 2',
            name      : 'topping',
            inputValue: '2',
            checked   : true,
            xtype: 'checkbox',
            margin: '5'
        }, {
            boxLabel  : 'Valoarea 3',
            name      : 'topping',
            inputValue: '3',
            xtype: 'checkbox',
            margin: '5'
        },
//        ************ Combobox
        {
            fieldLabel: 'Choose State',
            xtype: 'combobox',
            store: 'CompanyApp.store.CompanyStore',
            queryMode: 'local',
            displayField: 'title',
            valueField: 'idno',
            margin: '5',
            width: 450,
        },
//        *************Date input
        {
            xtype: 'datefield',
            anchor: '100%',
            fieldLabel: 'Alege data',
            name: 'from_date',
            margin: '5',
            maxValue: new Date()  
        },
//        ************ Numebr input
        {
            xtype: 'numberfield',
            anchor: '100%',
            name: 'numar',
            fieldLabel: 'Alege numarul',
            value: 99,
            margin: '5',
            maxValue: 99,
            minValue: 0
        }
    ]
});