class Template < ActiveRecord::Base
  belongs_to :category
  has_attached_file :image, default_url: "/images/missing.png"

  do_not_validate_attachment_file_type :image
  validates_attachment :image

end
