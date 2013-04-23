/*
 * File: app/view/MainViewport.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainViewport', {
    extend: 'Ext.container.Viewport',

    itemId: 'mainViewport',
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 100,
                    itemId: 'headerPanel',
                    title: 'Header',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'actionButton',
                            margin: 10,
                            text: 'Run Controller Action'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'contentPanel',
                    title: 'Content'
                }
            ]
        });

        me.callParent(arguments);
    }

});