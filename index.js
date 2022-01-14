//Script file
document.querySelector('.chatbot-icon').addEventListener('click', function(event) {
    document.querySelector('.chatbot-window').classList.toggle('open');
    document.querySelector('.chatbot-window').classList.toggle('hidden');
    document.querySelector('.label').classList.toggle('hide')    
});