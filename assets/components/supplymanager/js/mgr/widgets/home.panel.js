SupplyManager.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'supplymanager-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            html: '<h2>' + _('supplymanager') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items: [{
                title: _('supplymanager_items'),
                layout: 'anchor',
                items: [{
                    html: _('supplymanager_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'supplymanager-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    SupplyManager.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(SupplyManager.panel.Home, MODx.Panel);
Ext.reg('supplymanager-panel-home', SupplyManager.panel.Home);
