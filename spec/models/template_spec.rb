require 'rails_helper'

describe Template do
  it {should belong_to :category}
  it {should validate_presence_of :image }
end
