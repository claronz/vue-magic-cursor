import MagicCursor from "./components/MagicCursor.vue";

const MagicCursorPlugin = {
  install(app) {
    app.component('MagicCursor', MagicCursor);
  }
};

export { MagicCursor };
export default MagicCursorPlugin;