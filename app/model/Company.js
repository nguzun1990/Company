Ext.define('CompanyApp.model.Company', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'idno',   type: 'int'},
        {name: 'title', type: 'string'},
        {name: 'address', type: 'string'},
        {name: 'director', type: 'string'}
    ],

    changeName: function() {
        var oldName = this.get('name'),
            newName = oldName + " The Barbarian";

        this.set('name', newName);
    }
});