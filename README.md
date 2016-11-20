#  Image Management
## *By Patrick Lipscomb & Katarina Tuttle*

A Ruby on Rails application that makes heavy use of the React-Rails Gem to provide a streamlined experience for users that want a guarded image management platform. Users have the ability to crop and download images that are not saved long term to the database. The cropping process has configurable aspect ratio settings. The Admin user is able to manage saved images through a dashboard built in ReactJS.

##  Important Notice

When logging in for the first time, use **User Name: Alpha Admin**  **Password: password**
The database must first be seeded for this to work. It will allow you to access all features, including the ReactJS Admin Dashboard.

## Technologies Used

* **Application**: *Ruby on Rails 5, ReactJS*<br>
* **Testing**: *Rspec, Capybara*<br>
* **Database**: *Postgres, ActiveRecord*

Installation
------------

Install *Image Management* by cloning the repository.
```
$ git clone https://github.com/PatrickCLipscomb/image-management-react-rails
```

Check to make sure ruby and rails are installed on your machine.
```
$ ruby -v
$ rails -v
```
If they are not installed, please follow instructions [here](http://guides.rubyonrails.org/getting_started.html#installing-rails) to install ruby on rails.

Install required gems:
```
$ bundle install
```

Run Postgres:
```
$ postgres
```

Navigate to project file and migrate database:
```
$ rake db: create
$ rake db: migrate
$ rake db: seed
```

Start the Rails webserver:
```
$ rails server
```

Navigate to `localhost:3000` in your browser of choice.

License
-------
_This software is licensed under the MIT license._<br>
Copyright (c) 2016 **Patrick Lipscomb & Katarina Tuttle**
