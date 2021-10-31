require 'pry'
require 'net/http'
require 'uri'

class AnimesController < ApplicationController
    def index
    puts 'fetching all anime for this season...'
    source = 'https://api.jikan.moe/v3/season'
    resp = Net::HTTP.get_response(URI.parse(source))
    data = resp.body
    result = JSON.parse(data)

    render json:  result.fetch('anime')
    end

    def show
    end

    def info_by_id
        puts "fetching info for: #{:id}"
        id = params[:id]
        qry = Jikan::Query.new
        results = qry.anime_id id

        render json:  results.raw
    end

    def filter_by_top
        puts 'fetching top anime...'
        source = 'https://api.jikan.moe/v3/top/anime'
        resp = Net::HTTP.get_response(URI.parse(source))
        data = resp.body
        result = JSON.parse(data)

        render json:  result.fetch('top').first(10)
    end

    def search_by_id
        puts "searching for: #{:id}"
        term = params[:id]
        qry = Jikan::Query.new
        railgun = qry.search( params[:id], :anime)

        render json:  railgun.raw.fetch('results')
    end
end
