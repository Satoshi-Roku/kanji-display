import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["kanjiMain"]

  toggleFont() {
    this.kanjiMainTarget.classList.toggle("large")
    // optional: localStorage.setItem(...)
  }
}
