$(document).ready(
    function() {
        $('#addBtn').click(function() {
                const newItem = $('#addNewEl').val();
                    $('#toDoList').append('<li>' + newItem + '</li>');
                    $('#addNewEl').val('');
            });
    }
);
