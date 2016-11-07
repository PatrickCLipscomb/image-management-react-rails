class Template < ActiveRecord::Base
  belongs_to :category
  has_attached_file :image, default_url: "/images/missing.png", :processors => [:cropper]

  do_not_validate_attachment_file_type :image

  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h

  def cropping?
    !crop_x.blank? && !crop_y.blank? && !crop_w.blank? && !crop_h.blank?
  end

  def image_geometry(style = :original)
    @geometry ||= {}
    @geometry[style] ||= Paperclip::Geometry.from_file(image.path(style))
  end

  def reprocess_image
    image.reprocess!
  end

  def title=(title)
    write_attribute(:title, title.titleize)
  end

end
