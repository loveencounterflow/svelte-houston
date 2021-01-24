
<!-- <script context="module" lang=coffeescript>
console.log '^333636^ run once'
</script> -->

<script lang=coffeescript>
############################################################################################################
import { onMount } from 'svelte'
log                       = console.log
# export name               = 'UNKNOWN_NAME'
# export btntype            = 'switch'
# export btnshape           = 'square'
# export btnlight           = 'lit'
# export btncolor           = 'white'
# export btngroup           = 'toolbox'
# export on_click           = ''
export  _color            = 'white'
export _rotate            = '0deg' # anything valid in `transform: rotate(...)`


# #-----------------------------------------------------------------------------------------------------------
# onMount ->
#   # log '^33334^', { sktlayout, }
#   # setup_buttons()
#   return null

############################################################################################################
</script>


<style>

cap {
  /* ### TAINT code duplication, copied from Button.svelte */
  display:                flex;
  position:               absolute;
  left:                   0mm;
  top:                    0mm;
  flex-direction:         column;
  align-items:            center;
  justify-content:        center;
  width:                  100%;
  height:                 100%;
  /*transition:             background 250ms ease-in-out;*/
  /* this is to preserve the box shadow coming from the button element: */
  /*mix-blend-mode:         multiply; */
}

/* ### TAINT dont use global styles but some Svelte mechanism to pass values */
:global(button[_shape=circle].v2nr1 nudge) { margin-top:    1mm; } /* ### TAINT amount relies on font size */
:global(button[_shape=circle].v2nr2 nudge) { margin-bottom: 1mm; } /* ### TAINT amount relies on font size */

</style>


<cap style='background-color:{_color};'><nudge style='transform:rotate({_rotate});'><slot/></nudge></cap>



