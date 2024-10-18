var SupplyManager = function (config) {
    config = config || {};
    SupplyManager.superclass.constructor.call(this, config);
};
Ext.extend(SupplyManager, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('supplymanager', SupplyManager);

SupplyManager = new SupplyManager();