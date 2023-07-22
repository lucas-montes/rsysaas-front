module.exports = {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],

    darkMode: 'class',

    theme: {
        extend: {
            boxShadow: {
                '3xl': '0px 0px 70px -5px rgba(0,0,0,0.7);',
            }
        }


    }
};
