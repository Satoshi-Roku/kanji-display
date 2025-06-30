class CreateKanjis < ActiveRecord::Migration[7.1]
  def change
    create_table :kanjis do |t|
      t.string :character
      t.string :onyomi
      t.string :kunyomi
      t.string :meaning
      t.text :info

      t.timestamps
    end
  end
end
