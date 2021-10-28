require 'pry'
require 'net/http'
require 'uri'

class AnimesController < ApplicationController
    def index
    puts 'fetching all anime.'


    qry = Jikan::Query.new
    railgun = qry.search("railgun", :anime)

    render json:  railgun.raw.fetch('results')
    end

    def show
    end

    def top_index
        puts 'fetching top anime...'
        source = 'https://api.jikan.moe/v3/top/anime'
        resp = Net::HTTP.get_response(URI.parse(source))
        data = resp.body
        result = JSON.parse(data)

        render json:  result.fetch('top').first(10)
    end

    def search_index
        puts "searching for: #{:id}"
        term = params[:id]
        qry = Jikan::Query.new
        railgun = qry.search( params[:id], :anime)

        render json:  railgun.raw.fetch('results')
    end
end
