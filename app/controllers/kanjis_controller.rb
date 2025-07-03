class KanjisController < ApplicationController
  def index
      @kanji = Kanji.first
  end

  def show
    @kanji = Kanji.find(params[:id])
  end
end
