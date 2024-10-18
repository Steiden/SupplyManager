<?php

/**
 * The home manager controller for SupplyManager.
 *
 */
class SupplyManagerHomeManagerController extends modExtraManagerController
{
    /** @var SupplyManager $SupplyManager */
    public $SupplyManager;


    /**
     *
     */
    public function initialize()
    {
        $this->SupplyManager = $this->modx->getService('SupplyManager', 'SupplyManager', MODX_CORE_PATH . 'components/supplymanager/model/');
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return ['supplymanager:default'];
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('supplymanager');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->SupplyManager->config['cssUrl'] . 'mgr/main.css');
        $this->addJavascript($this->SupplyManager->config['jsUrl'] . 'mgr/supplymanager.js');
        $this->addJavascript($this->SupplyManager->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->SupplyManager->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->SupplyManager->config['jsUrl'] . 'mgr/widgets/items.grid.js');
        $this->addJavascript($this->SupplyManager->config['jsUrl'] . 'mgr/widgets/items.windows.js');
        $this->addJavascript($this->SupplyManager->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->SupplyManager->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        SupplyManager.config = ' . json_encode($this->SupplyManager->config) . ';
        SupplyManager.config.connector_url = "' . $this->SupplyManager->config['connectorUrl'] . '";
        Ext.onReady(function() {MODx.load({ xtype: "supplymanager-page-home"});});
        </script>');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        $this->content .= '<div id="supplymanager-panel-home-div"></div>';

        return '';
    }
}