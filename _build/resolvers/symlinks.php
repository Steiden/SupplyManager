<?php
/** @var xPDOTransport $transport */
/** @var array $options */
/** @var modX $modx */
if ($transport->xpdo) {
    $modx =& $transport->xpdo;

    $dev = MODX_BASE_PATH . 'Extras/SupplyManager/';
    /** @var xPDOCacheManager $cache */
    $cache = $modx->getCacheManager();
    if (file_exists($dev) && $cache) {
        if (!is_link($dev . 'assets/components/supplymanager')) {
            $cache->deleteTree(
                $dev . 'assets/components/supplymanager/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_ASSETS_PATH . 'components/supplymanager/', $dev . 'assets/components/supplymanager');
        }
        if (!is_link($dev . 'core/components/supplymanager')) {
            $cache->deleteTree(
                $dev . 'core/components/supplymanager/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_CORE_PATH . 'components/supplymanager/', $dev . 'core/components/supplymanager');
        }
    }
}

return true;