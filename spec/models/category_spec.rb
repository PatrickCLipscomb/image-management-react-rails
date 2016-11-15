require 'rails_helper'

describe Category do
  it {should have_many :templates}
end
