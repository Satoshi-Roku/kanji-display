import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  prev() { this.navigate(-1) }
  next() { this.navigate(1) }

  navigate(step) {
    const currentId = parseInt(this.element.dataset.kanjiId)
    const target = currentId + step
    // Annahme: IDs liegen lückenlos vor – sonst anpassen
    window.location = `/kanjis/${target}`
  }
}
