require 'pry'
class AnimesController < ApplicationController
    def index
    puts 'fetching all anime.'
    binding.pry


    qry = Jikan::Query.new
    railgun = qry.search("railgun", :anime)

    render json:  railgun.raw.fetch('results')
    end
end
