# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
jQuery ->
  new AvatarCropper()

class AvatarCropper
  constructor: ->
    $('#cropbox').Jcrop
      onSelect: @update
      onChange: @update
      setSelect: [0, 0, 200, 200]
      aspectRatio: 1

  update: (coords) =>
    $('#template_crop_x').val(coords.x)
    $('#template_crop_y').val(coords.y)
    $('#template_crop_w').val(coords.w)
    $('#template_crop_h').val(coords.h)
