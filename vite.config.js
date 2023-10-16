import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    include: [
      // Include dependencies that may have issues with automatic imports
      // "@mui/styled-engine",
      // "@mui/system",
      // "@mui/material",
      // "@mui/icons-material",
      // "@emotion/styled",
    ],
  },
});
