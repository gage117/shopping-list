'use strict';

function main() {
    // VVV Sets any checked-by-default elements to unchecked on page load 
    $(function() {
        $('.shopping-item__checked').removeClass('shopping-item__checked');
    })
    // VVV Appends the inputted text to a new list item
    $('#js-shopping-list-form button').click(function(e) {
        e.preventDefault();
        let textIn = $('#shopping-list-entry').val();
        let liTemplate = '<li>' +
                '<span class="shopping-item">' + textIn + '</span>' +
                '<div class="shopping-item-controls">' +
                '<button class="shopping-item-toggle">' +
                    '<span class="button-label">check</span>' +
                '</button>' +
                '<button class="shopping-item-delete">' +
                    '<span class="button-label">delete</span>' +
                '</button>' +
                '</div>' +
            '</li>';
        $('.shopping-list').append(liTemplate);
    })
    // VVV Toggles strikethrough and 'check'/'uncheck' text
    $('body').on('click', '.shopping-item-toggle', function() {
        $(this).parent().siblings().toggleClass('shopping-item__checked');
        $(this).find('.button-label').text(function(i, text) {
            return text === 'uncheck' ? 'check' : 'uncheck';
        });
    });
    // VVV Deletes items from list on click
    $('body').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').toggle();
    });
    // VVV Enter-to-click for 'Add Item'
    $('#js-shopping-list-form button').keyup(function(event) { 
        if (event.keyCode === 13) { 
            $('#js-shopping-list-form button').click(); 
        } 
    });
}
    
$(main);
    