$(document).ready(function() {
    $('#generate').click(function() {
        let length = $('#length').val();
        let useDigits = $('#digits').is(':checked');
        let useUppercase = $('#uppercase').is(':checked');
        let useLowercase = $('#lowercase').is(':checked');

        let characters = '';
        if (useDigits) characters += '0123456789';
        if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';

        if (characters === '') {
            $('#result').text('Будь ласка, виберіть хоча б один параметр.');
            return;
        }

        let result = '';
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }

        $('#result').text(result);
    });
});