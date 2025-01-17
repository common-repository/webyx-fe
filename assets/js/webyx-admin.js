/*! Webyx FE - https://webyx.it/wfe-guide */jQuery(document).ready(function(e) {
  elementor.settings.page.addChangeCallback("webyx_enable", function() {
    e(".elementor-control-webyx_reload").removeClass("webyx-reload-button-disabled");
  }), elementor.channels.editor.on("webyxReload", () => {
    e(".elementor-control-webyx_reload").hasClass("webyx-reload-button-disabled") || (e(".elementor-control-webyx_reload button").addClass("webyx-reload-button-blinking"), 
    e(".elementor-control-webyx_reload button").text("Saving changes"), $e.run("document/save/pending").done(function() {
      e(".elementor-control-webyx_reload button").text("Reloading editor"), window.location.reload();
    }));
  }), elementor.channels.editor.on("webyxProLink", () => {
    window.open("https://webineer.gumroad.com/l/webyx-for-elementor-pro", "_blank");
  });
});