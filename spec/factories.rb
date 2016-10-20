FactoryGirl.define do
  factory(:user) do
    username("admin")
    email("admin@admin.com")
    password("password")
  end
end
