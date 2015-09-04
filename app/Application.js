Ext.define('CompanyApp.Application', {
    name: 'CompanyApp',
    requires:[
        'CompanyApp.Utils.Config'
    ],

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        'CompanyApp.controller.Main'
    ],

    stores: [
        'CompanyApp.store.CompanyStore'
    ]
});
