FactoryGirl.define do
  factory(:user) do
    username("AlphaAdmin")
    email("admin@admin.com")
    password("password")
  end
end
