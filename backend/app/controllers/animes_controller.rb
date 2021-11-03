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
        puts "fetching info for: #{params[:id]}"
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
        puts "searching for: #{params[:id]}"
        term = params[:id]
        if term == 'null' 
            render json: []
        else
        qry = Jikan::Query.new
            result = qry.search( term, :anime)

            render json:  result.raw.fetch('results')
        end
    end

    def search_by_genre
        puts "searching by genre"
        source = "https://api.jikan.moe/v3/genre/anime/#{params[:id]}"
        resp = Net::HTTP.get_response(URI.parse(source))
        data = resp.body
        result = JSON.parse(data)

        render json:  result.fetch('anime')
    end
end
