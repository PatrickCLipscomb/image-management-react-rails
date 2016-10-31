module Paperclip
  class Cropper < Thumbnail
    def transformation_command
       if crop_command
         crop_command + super.join(' ').sub(/ -crop \S+/, '').split(' ')
       #super returns an array like this: [“-resize”, “100x”, “-crop”,            “100×100+0+0”, “+repage”]
       else
         super
       end
     end
     def crop_command
       target = @attachment.instance
       if target.cropping?
         ["-crop", target.crop_w.to_s + "x" + target.crop_h.to_s + "+" + target.crop_x.to_s + "+" + target.crop_y.to_s]
       end
     end
  end
end
