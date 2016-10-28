class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :authentication_keys => [:username]
  devise :registerable, :recoverable, :rememberable, :trackable, :validatable
end
