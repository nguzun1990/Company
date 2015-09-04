Ext.define('CompanyApp.store.BaseStore', {
    extend: 'Ext.data.Store',
    setExtraParam: function(key, value) {
        var proxy = this.getProxy();
        proxy.setExtraParam(key, value);
        this.setProxy(proxy);
    },
    getExtraParam: function(key) {
        var proxy = this.getProxy();
        return proxy.getExtraParams()[key];
    },
    removeExtraParam: function(key) {
        var proxy = this.getProxy();
        delete proxy.getExtraParams()[key];
        this.setProxy(proxy);
    }
});