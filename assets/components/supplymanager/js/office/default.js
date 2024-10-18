Ext.onReady(function () {
    SupplyManager.config.connector_url = OfficeConfig.actionUrl;

    var grid = new SupplyManager.panel.Home();
    grid.render('office-supplymanager-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});