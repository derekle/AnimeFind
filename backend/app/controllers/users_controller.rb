class UsersController < ApplicationController
    def index
        puts 'fetching all users.'
        # users = User.all
        # render json: users, except:[:password_digest, :created_at, :updated_at]
        qry = Jikan::Query.new
        railgun = qry.search("railgun", :anime)
        puts railgun.class

        render json:  railgun.raw.fetch('results')
    end

    def create
        puts "creating user with the following params: #{params}"
        u = User.create!(
            username:params[:username], 
            password:params[:password]
            )
            render json: u, except: [:password_digest, :created_at, :updated_at]
    end

    def show
        render json: get_user, except: [:password_digest, :created_at, :updated_at]
    end

    def update
        get_user.update!(
            username:params[:username], 
            password:params[:password]
            )
        render json: get_user, except: [:password_digest, :created_at, :updated_at]
    end

    def destroy
        get_user.destroy
    end

    private
    def get_user
         User.find_by(id: params[:id]) || User.all    
    end
end
