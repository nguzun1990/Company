Ext.define('CompanyApp.view.CompanyGrid', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'company-grid',

    title: 'Companies',
    store: 'CompanyApp.store.CompanyStore',
    columns: [
        { text: 'IDNO',  dataIndex: 'idno', flex: 1 },
        { text: 'Denumirea', dataIndex: 'title', flex: 3 },
        { text: 'Adresa', dataIndex: 'address', flex: 3 },
        { text: 'Conducatorul', dataIndex: 'director', flex: 2 }
    ],
    height: 300,
    width: '80%',
    margin: '20 0 0 0'
});