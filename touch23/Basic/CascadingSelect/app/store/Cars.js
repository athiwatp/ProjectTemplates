/*
 * File: app/store/Cars.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CascadingSelect.store.Cars', {
    extend: 'Ext.data.Store',

    requires: [
        'CascadingSelect.model.Car'
    ],

    config: {
        data: [
            {
                maker: 'BWM',
                series: '3 Series',
                model: '328'
            },
            {
                maker: 'BWM',
                series: '3 Series',
                model: '328i'
            },
            {
                maker: 'BWM',
                series: '5 Series',
                model: '529'
            },
            {
                maker: 'Atoyot',
                series: 'Car-rolla',
                model: 'Model L'
            },
            {
                maker: 'Atoyot',
                series: 'Car-rolla',
                model: 'Model LE'
            },
            {
                maker: 'Atoyot',
                series: 'Car-rolla',
                model: 'Model S'
            },
            {
                maker: 'Atoyot',
                series: 'Pre Us',
                model: 'Two'
            },
            {
                maker: 'Atoyot',
                series: 'Pre Us',
                model: 'Three'
            },
            {
                maker: 'Atoyot',
                series: 'Pre Us',
                model: 'Four'
            },
            {
                maker: 'Lodge',
                series: 'Larger',
                model: 'SXT'
            },
            {
                maker: 'Lodge',
                series: 'Larger',
                model: 'SXT Plus'
            },
            {
                maker: 'Lodge',
                series: 'Larger',
                model: 'SXT R/T'
            }
        ],
        model: 'CascadingSelect.model.Car',
        storeId: 'Cars'
    },

    getMakerNames: function() {
        var makerNames = [];
        this.each(function(car) {
            makerNames.push(car.get('maker'));
        });
        return Ext.Array.unique(makerNames);
    },

    getSeriesNames: function(maker) {
        var seriesNames = [];
        this.each(function(car) {
            if (car.get('maker') == maker) {
                seriesNames.push(car.get('series'));
            }
        });
        return Ext.Array.unique(seriesNames);
    },

    getModelNames: function(maker, series) {
        var modelNames = [];
        this.each(function(car) {
            if ((car.get('maker') == maker) && (car.get('series') == series)) {
                modelNames.push(car.get('model'));
            }
        });
        return modelNames;
    }

});