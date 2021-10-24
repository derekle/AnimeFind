class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|

      t.timestamps
    end
  end
end
