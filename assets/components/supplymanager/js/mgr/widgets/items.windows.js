SupplyManager.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'supplymanager-item-window-create';
    }
    Ext.applyIf(config, {
        title: _('supplymanager_item_create'),
        width: 550,
        autoHeight: true,
        url: SupplyManager.config.connector_url,
        action: 'mgr/item/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    SupplyManager.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(SupplyManager.window.CreateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('supplymanager_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('supplymanager_item_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('supplymanager_item_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('supplymanager-item-window-create', SupplyManager.window.CreateItem);


SupplyManager.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'supplymanager-item-window-update';
    }
    Ext.applyIf(config, {
        title: _('supplymanager_item_update'),
        width: 550,
        autoHeight: true,
        url: SupplyManager.config.connector_url,
        action: 'mgr/item/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    SupplyManager.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(SupplyManager.window.UpdateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('supplymanager_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('supplymanager_item_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('supplymanager_item_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('supplymanager-item-window-update', SupplyManager.window.UpdateItem);