class Template < ActiveRecord::Base
  belongs_to :category
  has_attached_file :image
  do_not_validate_attachment_file_type :image
end
