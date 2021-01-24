
<!-- <script context="module" lang=coffeescript>
console.log '^333636^ run once'
</script> -->

<script lang=coffeescript>
############################################################################################################
import { onMount } from 'svelte'
log                       = console.log
export sktlayout          = 'single'
export _casing            = false

#-----------------------------------------------------------------------------------------------------------
onMount ->
  # log '^33334^', { sktlayout, }
  # setup_buttons()
  return null

############################################################################################################
</script>


<style>
socket {
  --mkts-toolbox-button-font-family-CFG:      var( --mkts-toolbox-button-font-family,   'gui'           );
  --mkts-toolbox-button-font-weight-CFG:      var( --mkts-toolbox-button-font-weight,   bold            );
  --mkts-toolbox-border-color-CFG:            var( --mkts-toolbox-border-color,         #333333ff       );
  --mkts-toolbox-button-dark-color-CFG:       var( --mkts-toolbox-button-dark-color,    #333333ff       );
  --mkts-toolbox-lamp-red-CFG:                var( --mkts-toolbox-lamp-red,             #ff6a00         );
  --mkts-toolbox-lamp-white-CFG:              var( --mkts-toolbox-lamp-white,           white           );
  --mkts-toolbox-lamp-green-CFG:              var( --mkts-toolbox-lamp-green,           lime            );
  --mkts-toolbox-lamp-yellow-CFG:             var( --mkts-toolbox-lamp-yellow,          yellow          );
  --mkts-toolbox-lamp-orange-CFG:             var( --mkts-toolbox-lamp-orange,          orange          );
  --mkts-toolbox-lamp-turquoise-CFG:          var( --mkts-toolbox-lamp-turquoise,       #00dddd         );
  --mkts-toolbox-lamp-blue-CFG:               var( --mkts-toolbox-lamp-blue,            #72b8ff         ); }

socket {
/*  background-color: crimson;
  border: 1mm solid magenta;
*/
  /*outline:                0px solid yellow;*/
  display:                flex;
  justify-content:        flex-start;
  position:               relative;
  /*width:                  100%;*/
  border-width:           0.00mm;
  border-style:           solid;
  border-color:           var(--mkts-toolbox-border-color-CFG);
  background-color:       var(--mkts-toolbox-border-color-CFG); }

socket[sktlayout=row]    { flex-direction: row;    }
socket[sktlayout=column] { flex-direction: column; }
/*:global(socket socket) { border: none !important; }*/
/*socket socket { border-color: red !important; }*/

socket[_casing=true] {
  border-width:           0.5mm; }

/*socket[_casing=false] {}*/

</style>

<socket fresh=true {sktlayout} {_casing}><slot/></socket>


