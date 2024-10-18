SupplyManager.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'supplymanager-panel-home',
            renderTo: 'supplymanager-panel-home-div'
        }]
    });
    SupplyManager.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(SupplyManager.page.Home, MODx.Component);
Ext.reg('supplymanager-page-home', SupplyManager.page.Home);