(function(){
	var modalTrigger = document.getElementsByClassName('link-trigger')[0];
	var modal = document.getElementById('modal');
	var closeModal = document.getElementById('close-modal');
	//detect the click #modal-trigger
	//open the #modal - add the is-visible class
	modalTrigger.addEventListener('click', function(event){
		event.preventDefault();
		// modal.setAttribute('class','is-visible');
		// modal.classList.add('is-visible');
		classie.add(modal, 'is-visible');
	});
	//To remove
	closeModal.addEventListener('click', function(event){
		// modal.classList.remove('is-visible');
		classie.remove(modal, 'is-visible');


	});
	document.addEventListener('keyup', function(event){
		//code fired when a key is released
		//IF ESCAPE HAS BEEN RELEASED
		//if event.keyCod == 27 --> close modal
		if (event.keyCode == 27){
			classie.remove(modal, 'is-visible');
		}

	});
})();
