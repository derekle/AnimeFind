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

    def search
        if anime_params.length == 1
            render json: []
        else
            request = anime_params.except(:type)
            parse = request.map{ |k,v| "#{k}=#{v}"}.join('&')
            source = "https://api.jikan.moe/v3/search/#{anime_params[:type]}?"+parse
            puts source
            resp = Net::HTTP.get_response(URI.parse(source))
            data = resp.body
            result = JSON.parse(data)
            render json:  result.fetch('results')
        end
    end

    private
    def anime_params
        params.permit(:q, :type, :query, :id, :genre).to_h
    end
end
