!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("6JpON");function r(e,n){return new Promise((function(t,o){setInterval((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.target.elements,t=n.amount,o=n.delay,a=n.step,l=Number(o.value),u=0;u<Number(t.value);u+=1)r(u+1,l).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),l+=Number(a.value)}))}();
//# sourceMappingURL=03-promises.1d656fc1.js.map
