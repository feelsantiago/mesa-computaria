import { defineConfig } from 'vite';
import path from 'path';
import htmlTemplate from 'vite-plugin-html-template';
import mpa from 'vite-plugin-mpa';

export default defineConfig({
    plugins: [
        mpa({
            open: '/home',
        }),
        htmlTemplate({
            pagesDir: 'src/pages',
            pages: {
                home: {
                    template: './src/layouts/home.layout.html',
                    title: 'HomePage',
                },
            },
            data: {
                title: 'HomePage',
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        globals: true,
        reporters: ['verbose', 'junit'],
        outputFile: 'coverage/report.xml',
        watch: false,
        environment: "happy-dom",
    }
});