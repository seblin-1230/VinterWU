var saved_places = [];

/**
 * @param {Element} button The button element
 */
function save_button_click(button) {
    if (!saved_places.includes(button.id)) {
        save_place(button.id);
    } else {
        remove_place(button.id);
    }
}

/**
 * @param {String} name_to_add The name of the element to add
 */
function save_place(name_to_add) {
    saved_places.push(name_to_add);

    const save_button = document.getElementById(name_to_add)
    save_button.children[0].src = "img/save-instagram-saved.png"; // Change button image to empty one
    save_button.setAttribute("saved", "");

    const aside = document.getElementsByTagName("aside")[0];

    // Create saved place div
    const div = document.createElement("div");
    div.setAttribute("name", name_to_add);
    div.setAttribute("class", "saved-places");

    // Create saved plave paragraph, The name of the place
    const paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode(name_to_add));

    div.appendChild(paragraph);

    // Create button for removing place from saved list
    const remove_button = document.createElement("button");
    remove_button.setAttribute("type", "button");
    remove_button.setAttribute("placetoremove", name_to_add)
    remove_button.setAttribute("onclick", "remove_place(this.getAttribute(\"placetoremove\"))")

    // Create image for button
    const remove_img = document.createElement("img");
    remove_img.setAttribute("src", "img/remove.png");

    remove_button.appendChild(remove_img);
    div.appendChild(remove_button);

    // Add div to html
    aside.appendChild(div);
}

/**
 * @param {String} name_to_remove The name of the element to remove
 */
function remove_place(name_to_remove) {
    saved_places.splice(saved_places.indexOf(name_to_remove));

    const save_button = document.getElementById(name_to_remove);
    save_button.children[0].src = "img/save-instagram-not-saved.png"; // Change button image to full one
    save_button.removeAttribute("saved");

    const paragraph = document.getElementsByName(name_to_remove)[0];
    paragraph.remove();
}