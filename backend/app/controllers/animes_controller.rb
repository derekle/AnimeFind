require 'pry'
require 'net/http'
require 'uri'

class AnimesController < ApplicationController
    def index
    end

    def index_season
        puts 'fetching all anime for this season...'
        source = 'https://api.jikan.moe/v3/season'
        result = json_from_endpoint(source)

        render json:  result.fetch('anime')
    end

    def index_top
        puts 'fetching top anime...'
        source = 'https://api.jikan.moe/v3/top/anime'
        result = json_from_endpoint(source)

        render json:  result.fetch('top').first(10)
    end

    def show
        puts "fetching info for: #{params[:id]}"
        source = "https://api.jikan.moe/v3/anime/#{params[:id]}"
        result = json_from_endpoint(source)

        render json:  result
    end

    def search
        if anime_params.length == 1
            render json: []
        else
            request = anime_params.except(:type)
            parse = request.map{ |k,v| "#{k}=#{v}"}.join('&')
            source = "https://api.jikan.moe/v3/search/#{anime_params[:type]}?"+parse
            
            result = json_from_endpoint(source)
            render json:  result.fetch('results')
        end
    end

    private
        def anime_params
            params.permit(:q, :type, :query, :id, :genre).to_h
        end

        def json_from_endpoint(source)
            resp = Net::HTTP.get_response(URI.parse(source))
            data = resp.body
            result = JSON.parse(data)
            return result
        end
end
