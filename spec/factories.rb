FactoryGirl.define do
  factory(:user) do
    username("AlphaAdmin")
    email("test@test.com")
    password("password")
  end
end
