/* GR4AI visitor counting with GoatCounter (https://www.goatcounter.com).
 *
 * What it counts: page views (GoatCounter works out the country from the
 * visit and then throws the address away) and a few events:
 *   quiz-completed-xx      the final quiz was finished          (xx = page language)
 *   certificate-xx         a certificate PDF was made
 *   language-xx            a language was chosen (globe or language links)
 *   download-pdf-xx        a link to a .pdf file was clicked
 *   gallery-open-xx        the drawing gallery was opened in a new tab
 * No cookies, no localStorage, nothing about who the visitor is.
 *
 * SWITCHING IT ON: put the GoatCounter code between the quotes below.
 * For https://gr4ai.goatcounter.com the code is "gr4ai". Empty = off.
 *
 * Pages report events by firing   gr4ai:count   with the event name as detail:
 *   document.dispatchEvent(new CustomEvent("gr4ai:count", { detail: "quiz-completed-en" }));
 */
(function () {
  "use strict";

  var CODE = "gr4ai";   // <-- GoatCounter code: https://gr4ai.goatcounter.com

  var queue = [];
  function count(name) {
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: name, title: name, event: true });
    } else {
      queue.push(name);
    }
  }

  // Events are listened for even while counting is off, so nothing on the
  // pages needs to change when the code is filled in.
  document.addEventListener("gr4ai:count", function (e) {
    if (CODE && e && typeof e.detail === "string") count(e.detail);
  });

  if (!CODE) return;

  var lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();

  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a) return;
    var href = a.getAttribute("href") || "";
    if (/\.pdf(?:[?#]|$)/i.test(href)) count("download-pdf-" + lang);
    else if (a.closest(".lang-switch") && a.hreflang) count("language-" + a.hreflang.slice(0, 2).toLowerCase());
    else if (/padlet\.com/i.test(href)) count("gallery-open-" + lang);
  }, true);

  var s = document.createElement("script");
  s.async = true;
  s.src = "assets/goatcounter-count-2.7.0.js";
  s.setAttribute("data-goatcounter", "https://" + CODE + ".goatcounter.com/count");
  s.onload = function () {
    var q = queue; queue = [];
    q.forEach(count);
  };
  document.head.appendChild(s);
})();
