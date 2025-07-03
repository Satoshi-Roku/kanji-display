// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import { Application } from "@hotwired/stimulus"
import KanjiController from "./controllers/kanji_controller"
import SettingsController from "./controllers/settings_controller"

const application = Application.start()
application.register("kanji", KanjiController)
application.register("settings", SettingsController)
