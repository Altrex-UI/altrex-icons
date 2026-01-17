export default {
    plugins: [
        {
            name: 'removeAttrs',
            params: {
                // Remove fill attributes that don't use CSS variables
                // This keeps multi-color icons with var() intact
                attrs: '*:fill:((?!^var).)*'
            }
        },
        {
            name: 'removeAttrs',
            params: {
                // Remove style attributes from path elements
                attrs: 'path:style'
            }
        },
        {
            name: 'removeStyleElement',
        },
        {
            name: 'removeTitle',
        }
    ]
};
