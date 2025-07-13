module.exports = {
    extends: ['stylelint-config-recommended-scss'],
    plugins: ['stylelint-order', 'stylelint-value-no-unknown-custom-properties'],
    rules: {
        // Core rules
        'at-rule-no-unknown': null, // allow SCSS at-rules
        'no-empty-source': null,
        'no-descending-specificity': null,
        'declaration-property-value-no-unknown': null,

        // SCSS-specific
        'scss/at-rule-no-unknown': true,
        'scss/dollar-variable-pattern': null,
        'scss/function-no-unknown': null,

        // Ordering
        'order/properties-order': [
            [
                // Positioning
                'position',
                'top',
                'right',
                'bottom',
                'left',
                'z-index',

                // Display & Flex/Grid
                'display',
                'flex-direction',
                'flex-wrap',
                'justify-content',
                'align-items',
                'align-content',
                'gap',

                // Grid
                'grid',
                'grid-template-columns',
                'grid-template-rows',
                'grid-template-areas',
                'grid-template',
                'grid-auto-columns',
                'grid-auto-rows',
                'grid-auto-flow',
                'grid-column',
                'grid-column-start',
                'grid-column-end',
                'grid-row',
                'grid-row-start',
                'grid-row-end',
                'grid-area',
                'place-items',
                'place-content',

                // Box Model
                'width',
                'min-width',
                'max-width',
                'height',
                'min-height',
                'max-height',
                'padding',
                'margin',

                // Typography
                'font-size',
                'font-weight',
                'line-height',
                'text-align',
                'color',

                // Visual
                'background',
                'border',
                'border-radius',
                'box-shadow',

                // Animation
                'transition',
                'animation'
            ],
            {
                unspecified: 'bottomAlphabetical'
            }
        ],

        // Custom property support
        'csstools/value-no-unknown-custom-properties': [
            true,
            {
                severity: 'warning'
            }
        ]
    },
    ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/build/**']
}
