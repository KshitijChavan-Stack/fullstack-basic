import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // when ever the '/api' will be used this url will
      // be appedned behind '/api' & it'll also add the proxy
      // that the server will think the request is coming from the same
      // server(PORT:4000) and the CORS poilcy problem will be solved
      "/api": "http://localhost:4000",
    },
  },
  plugins: [react()],
});
