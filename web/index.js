function loadScripts(packages, async) {
  packages.forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = async;
    document.head.appendChild(script);
  });
}

// loadScripts([
//   //-----------------------------
// ].map(package => System.normalizeSync(package)), false);

// System.import('typescript').catch(function(err){ console.error(err); });

System.import('app/main').catch(function(err){ console.error(err); });
