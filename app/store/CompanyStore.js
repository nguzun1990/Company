Ext.define('CompanyApp.store.CompanyStore', {
     extend: 'CompanyApp.store.BaseStore',
     model: 'CompanyApp.model.Company',
     storeId: 'CompanyStore',
     proxy: {
         type: 'ajax',
         url: CompanyApp.Utils.Config.userRoute,
         reader: {
             type: 'json',
//             root: 'users'
         }
     },
     autoLoad: true
 });