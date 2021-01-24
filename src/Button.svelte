
<!-- <script context="module" lang=coffeescript>
console.log '^333636^ run once'
</script> -->

<script lang=coffeescript>
############################################################################################################
import { onMount } from 'svelte'
log                       = console.log
export name               = 'UNKNOWN_NAME'
export btnlight           = 'lit'
# export btncolor           = 'white'
export btngroup           = 'toolbox'
export on_click           = ''
export _position          = 'single'
export _shape             = 'rect' # 'circle'
focuslight_class          = if _position is 'single' then 'triangle' else 'vertleft'
export disabled           = false
disabled                  = true if _shape is 'circle'
pointer_events            = if disabled then 'none' else 'all'

#-----------------------------------------------------------------------------------------------------------
onMount ->
  # log '^33334^', { sktlayout, }
  # setup_buttons()
  return null

############################################################################################################
</script>


<!-- ——————————————————————————————————————————————————————————————————————————————————————————————————— -->
<style>

/*label {
  display:                flex;
  flex-direction:         column;
  align-items:            center;
  justify-content:        center;
  width:                  100%;
  height:                 100%;
  font-family:            var(--mkts-toolbox-button-font-family-CFG);
  font-weight:            var(--mkts-toolbox-button-font-weight-CFG);
  font-size:              2.5mm;
  line-height:            100%;
  text-align:             center;
  text-transform:         uppercase;
  overflow:               hidden;
  white-space:            pre-line;
}
*/

/*xxx {
  display:                inline-block;
  width:                  10mm;
  height:                 10mm;
  margin:                 0mm;
  padding:                0mm;
}
*/
button {
  --border-scale:         0.5;
  --fat-border:           calc( 0.50mm * var(--border-scale) );
  --slim-border:          calc( var(--fat-border) * var(--border-scale) );
  --focuslight-triangle-scale:     1;
  --button-size:          10mm;
  --font-size:            calc( var(--button-size) / 4 );
  --font-size-small:      calc( var(--button-size) / 5 );
  --bright-red:           #ff0000;
  --dark-red:             #4f0000;
  --button-width:         var(--button-size);
  --button-height:        var(--button-size);
  --button-width-v2:      calc( var(--button-width) / 2 );
  --button-width-v3:      calc( var(--button-width) / 3 );
  --button-width-v4:      calc( var(--button-width) / 4 );
  --button-height-v2:     calc( var(--button-height) / 2 );
  --button-height-v3:     calc( var(--button-height) / 3 );
  --button-height-v4:     calc( var(--button-height) / 4 );
  all:                    unset;
  display:                inline-block;
  position:               relative;
  cursor:                 pointer;
  width:                  var(--button-width);
  height:                 var(--button-height);
  margin:                 0mm;
  padding:                0mm;
  /*border-width:           var(--fat-border);*/
  border-width:           0.5px;
  /*border-left-width:      var(--slim-border);*/
  border-style:           solid;
  border-color:           var(--mkts-toolbox-border-color-CFG);
  background-color:       var(--mkts-toolbox-border-color-CFG);
  overflow:               hidden;
  /* .................................................................................................... */
  font-family:            var(--mkts-toolbox-button-font-family-CFG);
  font-weight:            var(--mkts-toolbox-button-font-weight-CFG);
  font-size:              var(--font-size);
  line-height:            100%;
  text-align:             center;
  text-transform:         uppercase;
  /*overflow:               hidden;*/
  white-space:            pre-line; }

button.single { /*height: var(--button-height);*/ }

button.v2nr1 { height: var(--button-height-v2); /* border-top-width: var(--fat-border);   border-bottom-width: var(--slim-border); */ }
button.v2nr2 { height: var(--button-height-v2); /* border-top-width: var(--slim-border);  border-bottom-width: var(--fat-border);  */ }

button.v3nr1 { height: var(--button-height-v3); /* border-top-width: var(--fat-border);   border-bottom-width: var(--slim-border); */ }
button.v3nr2 { height: var(--button-height-v3); /* border-top-width: var(--slim-border);  border-bottom-width: var(--slim-border); */ }
button.v3nr3 { height: var(--button-height-v3); /* border-top-width: var(--slim-border);  border-bottom-width: var(--fat-border);  */ }

button.v4nr1 { height: var(--button-height-v4); /* border-top-width: var(--fat-border);   border-bottom-width: var(--slim-border); */ }
button.v4nr2 { height: var(--button-height-v4); /* border-top-width: var(--slim-border);  border-bottom-width: var(--slim-border); */ }
button.v4nr3 { height: var(--button-height-v4); /* border-top-width: var(--slim-border);  border-bottom-width: var(--slim-border); */ }
button.v4nr4 { height: var(--button-height-v4); /* border-top-width: var(--slim-border);  border-bottom-width: var(--fat-border);  */ }

button.v4nr1,
button.v4nr2,
button.v4nr3,
button.v4nr4 { font-size: var(--font-size-small); }

button.h2nr1 { width: var(--button-width-v2); /* border-top-width: var(--fat-border);   border-bottom-width: var(--slim-border); */ }
button.h2nr2 { width: var(--button-width-v2); /* border-top-width: var(--slim-border);  border-bottom-width: var(--fat-border);  */ }

button.h3nr1 { width: var(--button-width-v3); /* border-top-width: var(--fat-border);   border-bottom-width: var(--slim-border); */ }
button.h3nr2 { width: var(--button-width-v3); /* border-top-width: var(--slim-border);  border-bottom-width: var(--slim-border); */ }
button.h3nr3 { width: var(--button-width-v3); /* border-top-width: var(--slim-border);  border-bottom-width: var(--fat-border);  */ }

button.h4nr1 { width: var(--button-width-v4); /* border-top-width: var(--fat-border);   border-bottom-width: var(--slim-border); */ }
button.h4nr2 { width: var(--button-width-v4); /* border-top-width: var(--slim-border);  border-bottom-width: var(--slim-border); */ }
button.h4nr3 { width: var(--button-width-v4); /* border-top-width: var(--slim-border);  border-bottom-width: var(--slim-border); */ }
button.h4nr4 { width: var(--button-width-v4); /* border-top-width: var(--slim-border);  border-bottom-width: var(--fat-border);  */ }

button.h4nr1,
button.h4nr2,
button.h4nr3,
button.h4nr4 { font-size: var(--font-size-small); }

button:active {
  transform:              translate( 0.25mm, 0.25mm ); }

button:disabled {
  cursor:                 default; }

button.single[_shape=circle] { border-width: 0px; }
button.v2nr1[_shape=circle] { border-top-width: 0px; }
button.v2nr2[_shape=circle] { border-bottom-width: 0px; }
button.h2nr1[_shape=circle] { border-left-width: 0px; }
button.h2nr2[_shape=circle] { border-right-width: 0px; }

button.single[_shape=circle], button.single[_shape=circle] bezel { border-radius:              var(--button-height-v2); }
button.v2nr1[_shape=circle],  button.v2nr1[_shape=circle]  bezel { border-top-left-radius:     var(--button-height-v2); border-top-right-radius:     var(--button-height-v2); }
button.v2nr2[_shape=circle],  button.v2nr2[_shape=circle]  bezel { border-bottom-left-radius:  var(--button-height-v2); border-bottom-right-radius:  var(--button-height-v2); }
button.h2nr1[_shape=circle],  button.h2nr1[_shape=circle]  bezel { border-top-left-radius:     var(--button-height-v2); border-bottom-left-radius:   var(--button-height-v2); }
button.h2nr2[_shape=circle],  button.h2nr2[_shape=circle]  bezel { border-top-right-radius:    var(--button-height-v2); border-bottom-right-radius:  var(--button-height-v2); }

button:focus {
  /*border-left: red;*/
  /*box-shadow:             3px 2px 28px 18px rgb(247 249 157 / 75%), inset 3px 2px 28px 18px rgb(247 249 157 / 75%);*/
}

button.lit  {
  transition:             filter 150ms linear; }

button.dark {
  transition:             filter 150ms linear;
  filter:                 brightness(0.4); }

bezel {
  display:                block;
  position:               absolute;
  left:                   0mm;
  top:                    0mm;
  background-color:       transparent;
  width:                  100%;
  height:                 100%;
  box-shadow:             inset 0px 0px 9px -3px;
  /*mix-blend-mode:         multiply; */
}

focuslight {
  display:                block;
  position:               absolute;
  visibility:             hidden;
  z-index:                1;
}

lamp {
  display:                block;
  position:               relative;
}

focuslight.triangle {
  width:                  0mm;
  height:                 0mm;
  /* thx to https://css-tricks.com/snippets/css/css-triangle/ */
  border-left:            1.50mm solid transparent;
  border-right:           1.50mm solid transparent;
  border-bottom:          1.60mm solid var(--mkts-toolbox-border-color-CFG);
  left:                   -1.70mm;
  top:                    -0.30mm;
  transform-origin:       50% 0%;
  transform:              scale( var(--focuslight-triangle-scale) ) rotate(-45deg); }

focuslight.vertleft {
  width:                  0.80mm;
  height:                 100%;
  left:                   0mm;
  top:                    0mm;
  background-color:       var(--mkts-toolbox-border-color-CFG); }

focuslight.triangle lamp {
  width:                  0mm;
  height:                 0mm;
  top:                    0.30mm;
  left:                   -1.00mm;
  border-left:            1.00mm solid transparent;
  border-right:           1.00mm solid transparent;
  border-bottom:          1.00mm solid var(--dark-red);
  background-color:       transparent; }

focuslight.vertleft lamp {
  width:                  0.50mm;
  height:                 100%;
  top:                    0.00mm;
  left:                   0.00mm;
  background-color:       var(--dark-red); }

button:disabled focuslight {
  display:                none; }

button:focus focuslight.triangle lamp {
  border-bottom-color:    var(--bright-red); }

button:focus focuslight {
  visibility:  visible; }

button:focus focuslight.vertleft lamp {
  background-color:       var(--bright-red); }

</style>
<!-- ——————————————————————————————————————————————————————————————————————————————————————————————————— -->

<button
  {name}
  {btngroup}
  {btnlight}
  {_shape}
  {disabled}
  on:click={on_click}
  class='{_position} {btnlight}' style='pointer-events:{pointer_events};'><slot/><bezel/><focuslight class={focuslight_class}><lamp/></focuslight></button>
<!--     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
<!-- ### TAINT the above are almost certainly wrong ITST there's a better way to do it -->

