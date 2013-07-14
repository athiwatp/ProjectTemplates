/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
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

Ext.define('MyApp.view.MainView', {
    extend: 'Ext.container.Viewport',

    itemId: 'mainView',
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    itemId: 'menuPanel',
                    width: 150,
                    title: 'Menu',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            itemId: 'menu',
                            items: [
                                {
                                    xtype: 'menuitem',
                                    href: '#home',
                                    text: 'Home'
                                },
                                {
                                    xtype: 'menuitem',
                                    href: '#about',
                                    text: 'About Us'
                                },
                                {
                                    xtype: 'menuitem',
                                    href: '#contact',
                                    text: 'Contact us'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            itemId: 'home',
                            title: 'Home'
                        },
                        {
                            xtype: 'panel',
                            itemId: 'about',
                            title: 'About Us'
                        },
                        {
                            xtype: 'panel',
                            itemId: 'contact',
                            title: 'Contact Us'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});