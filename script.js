    try{
      var savedTheme=localStorage.getItem("theme");
      document.documentElement.setAttribute("data-theme",savedTheme === "light" ? "light" : "dark");
    }catch(error){}

function initializePage() {
    (function(){
      var root=document.documentElement;
      var button=document.getElementById("theme-toggle");
      var media=window.matchMedia("(prefers-color-scheme: dark)");

      function isDark(){
        var theme=root.getAttribute("data-theme");
        return theme !== "light";
      }

      function syncLabel(){
        button.setAttribute("aria-label",isDark() ? "Switch to light theme" : "Switch to dark theme");
      }

      button.addEventListener("click",function(){
        var next=isDark() ? "light" : "dark";
        root.setAttribute("data-theme",next);
        try{localStorage.setItem("theme",next)}catch(error){}
        syncLabel();
      });

      if(media.addEventListener) media.addEventListener("change",syncLabel);
      else if(media.addListener) media.addListener(syncLabel);
      syncLabel();
    })();

}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePage, { once: true });
} else {
  initializePage();
}
