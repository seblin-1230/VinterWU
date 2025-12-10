var saved_places = []

/**
 * @param {Element} button The button element
 */
function save_button_click(button) {
    if (!saved_places.includes(button.id)) {
        save_place(button);
    } else {
        remove_place(button);
    }
}

/**
 * @param {Element} button The button element
 */
function save_place(button) {
    saved_places.push(button.id);

    button.children[0].src = "img/save-instagram-saved.png";

    const aside = document.getElementsByTagName("aside")[0];

    const paragraph = document.createElement("p");
    const text_node = document.createTextNode(button.id);

    paragraph.setAttribute("name", button.id);
    paragraph.appendChild(text_node);

    aside.appendChild(paragraph);
}

/**
 * @param {Element} button The button element
 */
function remove_place(button) {
    saved_places.splice(saved_places.indexOf(button.id));

    button.children[0].src = "img/save-instagram-not-saved.png";

    const paragraph = document.getElementsByName(button.id)[0];
    paragraph.remove()
}