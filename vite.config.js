import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                topic2: resolve(__dirname, "topic2.html"),
                topic3: resolve(__dirname, "topic3.html"),
                topic4: resolve(__dirname, "topic4.html"),
                topic5: resolve(__dirname, "topic5.html"),
                about: resolve(__dirname, "about.html"),
                story: resolve(__dirname, "story.html"),
                character: resolve(__dirname, "character.html"),
                product: resolve(__dirname, "product.html"),
                support: resolve(__dirname, "support.html"),
                goods: resolve(__dirname, "goods.html"),
                special: resolve(__dirname, "special.html"),
                webradio: resolve(__dirname, "webradio.html"),
            },
        },
    },
});