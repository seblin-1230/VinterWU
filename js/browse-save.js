var saved_places = []

/**
 * @param {Element} button The button element
 */
function save_button_click(button) {
    if (!saved_places.includes(button.id)) {
        save_place(button)
    } else {
        remove_place(button)
    }
}

/**
 * @param {Element} button The button element
 */
function save_place(button) {
    saved_places.push(button.id)
    
    button.children[0].src = "img/save-instagram-saved.png"
}

/**
 * @param {Element} button The button element
 */
function remove_place(button) {
    saved_places.splice(saved_places.indexOf(button.id))

    button.children[0].src = "img/save-instagram-not-saved.png"
}