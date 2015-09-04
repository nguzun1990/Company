Ext.define('CompanyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    
    refs: [
        {
            ref: 'TitleInputSearch',
            selector: '[myId="title-input-search"]'
        },
        {
            ref: 'AddressInputSearch',
            selector: '[myId="address-input-search"]'
        },
        {
            ref: 'DirectorInputSearch',
            selector: '[myId="director-input-search"]'
        }
    ],
    
       
    init: function() {
        this.control({
            '[myId="title-input-search"]': {
                specialkey: function(field, e) {
                    if (e.getKey() == e.ENTER) {
                        this.reloadCompanies();
                    }
                }
            },
            '[myId="address-input-search"]': {
                specialkey: function(field, e) {
                    if (e.getKey() == e.ENTER) {
                        this.reloadCompanies();
                    }
                }
            },
            '[myId="director-input-search"]': {
                specialkey: function(field, e) {
                    if (e.getKey() == e.ENTER) {
                        this.reloadCompanies();
                    }
                }
            }
        });
        this.callParent(arguments);
    },
            
    reloadCompanies: function() {
        var store = Ext.getStore("CompanyApp.store.CompanyStore");
        store.setExtraParam('title', this.getTitleInputSearch().getValue());
        store.setExtraParam('address', this.getAddressInputSearch().getValue());
        store.setExtraParam('director', this.getDirectorInputSearch().getValue());
        store.load();
    }
});
