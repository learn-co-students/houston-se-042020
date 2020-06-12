# Rails as an API + Pokemon
We are going to combine our backend skills with our frontend skills.

## By the end of this lesson, you should be able to:
Set up a backend to receive requests and send JSON responses to a frontend, which then performs some DOM manipulation as a result.

## Before we go through the Pokemon teams project:
Let's go over a few things:
- MVC (how does it work when not serving HTML)
- What kind of responses should it send?
    - How do we choose what data to send?
- Do we still need views in our Rails projects?
- What is our frontend?
- Where is our frontend? In this project, is it on the same domain as the backend?
- What happens when we make a fetch request?

## CORS (Cross Origin Resource Sharing)
CORS is a policy defined on the backend which determines which requests are accepted or rejected. For example, we can specify that we want to accept all requests (*) or just those coming from specific domains. Think of it like a club with a dress code, only those wearing the right clothes can get in.

If you try to make a request to a server that has not whitelisted the domain from which you're making the request, you'll get an error containing the phrase 'No access control allow origin...blocked by CORS policy'. It'll be a sea of redness in your console, so you can't miss it. If you control the backend, you can change the policy. If you don't, you're out of luck. But you're in this Rails project, so you have the power!

## Cleaning up our controllers
We are using our controllers to serve up JSON data. Since we are specifying which attributes to include from our models and associations, they are getting kind of messy. To clean them up, we have a couple options:
1. Refactor the renders into their own methods
2. Use a serializer (serializers transform objects into strings) that helps us abstract these details into a separate file

Install Active Model Serializers: 
1. Add `gem active_model_serializers` to the GEMFILE
2. `bundle install`
3. Create a serializer: `rails g serializer trainer` # notice the singular name

You will now have a new serializer file in app > serializers. Here's an example for our trainers:
```
class TrainerSerializer < ActiveModel::Serializer
	attributes :name, :id
	has_many :pokemons # requires a pokemon serializer, relies on the association
end
```

You can now simplify your controller. For example in TrainersController:
```
render json: Trainer.all
```

## Extra Information
What if I want to have more than one version of my api? For example, sometimes I use an api, and the link is something like: 'https://reddit.com/api/v2/subs'

Adding versioning to your Rails API is a good idea if you plan on maintaining the project. Over time, you might wish to serve different data from your endpoints. However, the end users, or consumers, of your API need time to switch over to the new version, which means you need to host both the old version and the new version.

First, reorganize your controllers:
1. In app > controllers, create a new folder called api
2. In app > controllers > api, create a new folder called v1
3. Put all of your controllers inside of the v1 folder

Second, modify your routes. They'll now need to be namespaced to reflect the folder structure of the controllers folder. Here's an example:
```
namespace :api do 
	namespace :v1 do
		resources :trainers
		resources :pokemons
	end
end
```
Check your routes to make sure you did things correctly.

Lastly, modify your controller files. The class names will have to reflect the new naming convention:
```
class Api::V1::TrainersController < ApplicationController
  def index
  end
end
```
Pay attention to spelling and capitalization.

Example URL: http://localhost:3000/api/v1/trainers
