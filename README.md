# Closure compiler error with FastComponents
To replicate the problem, run the following:
```
npm install
npm run build
```

You will see the following errors (not sure how to fix):
```
ERROR in demo.js:1891 (originally at webpack$//../node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js:58) from closure-compiler: variable FASTElementDefinition is undeclared
        new FASTElementDefinition(type, nameOrDef).define();
            ^^^^^^^^^^^^^^^^^^^^^

ERROR in demo.js:7780 (originally at webpack$//../node_modules/@microsoft/fast-colors/dist/color-converters.js:74) from closure-compiler: variable ColorRGBA64 is undeclared
    return new ColorRGBA64(rgbOverlay.r, rgbOverlay.g, rgbOverlay.b, alpha);
               ^^^^^^^^^^^

ERROR in demo.js:8251 (originally at webpack$//../node_modules/@microsoft/fast-colors/dist/color-blending.js:43) from closure-compiler: variable rgbToLAB is undeclared
    const lab = rgbToLAB(input);
                ^^^^^^^^

ERROR in demo.js:8253 (originally at webpack$//../node_modules/@microsoft/fast-colors/dist/color-blending.js:45) from closure-compiler: variable labToRGB is undeclared
    return labToRGB(new ColorLAB(darkened, lab.a, lab.b));
           ^^^^^^^^

ERROR in demo.js:8253 (originally at webpack$//../node_modules/@microsoft/fast-colors/dist/color-blending.js:45) from closure-compiler: variable ColorLAB is undeclared
    return labToRGB(new ColorLAB(darkened, lab.a, lab.b));
                        ^^^^^^^^

ERROR in demo.js:8296 (originally at webpack$//../node_modules/@microsoft/fast-colors/dist/color-blending.js:88) from closure-compiler: variable rgbToHSL is undeclared
    const bottomHSL = rgbToHSL(bottom);
                      ^^^^^^^^

ERROR in demo.js:8301 (originally at webpack$//../node_modules/@microsoft/fast-colors/dist/color-blending.js:93) from closure-compiler: variable hslToRGB is undeclared
    return hslToRGB(new ColorHSL(topHSL.h, topHSL.s, bottomHSL.l));
           ^^^^^^^^

ERROR in demo.js:8301 (originally at webpack$//../node_modules/@microsoft/fast-colors/dist/color-blending.js:93) from closure-compiler: variable ColorHSL is undeclared
    return hslToRGB(new ColorHSL(topHSL.h, topHSL.s, bottomHSL.l));
                        ^^^^^^^^

ERROR in demo.js:8847 (originally at webpack$//../node_modules/@microsoft/fast-colors/dist/parse-color.js:54) from closure-compiler: variable namedColorsConfigs is undeclared
    return namedColorsConfigs.hasOwnProperty(raw);
           ^^^^^^^^^^^^^^^^^^

ERROR in demo.js:8906 (originally at webpack$//../node_modules/@microsoft/fast-colors/dist/parse-color.js:113) from closure-compiler: variable normalize is undeclared
    return new ColorRGBA64(normalize((rawInt & 0x00ff0000) >>> 16, 0, 255), normalize((rawInt & 0x0000ff00) >>> 8, 0, 255), normalize(rawInt & 0x000000ff, 0, 255), normalize((rawInt & 0xff000000) >>> 24, 0, 255));
                           ^^^^^^^^^

ERROR in demo.js:9224 (originally at webpack$//../node_modules/@microsoft/fast-colors/dist/color-palette.js:210) from closure-compiler: variable ColorScale is undeclared
    const scale = new ColorScale(stops);
                      ^^^^^^^^^^

ERROR in demo.js:10523 (originally at webpack$//../node_modules/@microsoft/fast-web-utilities/dist/dom.js:88) from closure-compiler: variable canUseDOM is undeclared
    return (canUseDOM() &&
            ^^^^^^^^^

ERROR in demo.js:11184 (originally at webpack$//../node_modules/@microsoft/fast-components/dist/esm/button/index.js:23) from closure-compiler: variable SVGElement is undeclared
        if (slottedElements.length === 1 && slottedElements[0] instanceof SVGElement) {
                                                                          ^^^^^^^^^^

ERROR in demo.js:11219 (originally at webpack$//../node_modules/@microsoft/fast-components/dist/esm/button/index.js:58) from closure-compiler: variable styles is undeclared
const button_buttonStyles = (/* unused pure expression or super */ null && (styles));
                                                                            ^^^^^^

webpack 5.60.0 compiled with 14 errors in 5156 ms
```

# Without closure compiler, everything works fine
You can run the following:
```
npm run start
```
The fast button will be shown correctly here without using closure compiler.