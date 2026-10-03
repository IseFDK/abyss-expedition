import { defineConfig } from 'vite';
import { resolve } from 'node:path';
export default defineConfig({base:'/abyss-expedition/',build:{outDir:'docs',emptyOutDir:true,rollupOptions:{input:Object.fromEntries(['index','expedition','atlas','vehicle'].map(p=>[p,resolve(p+'.html')]))}},server:{host:'0.0.0.0',port:4173,strictPort:true}});
