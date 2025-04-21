const form = document.getElementById('formulario-datos');

    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) { // Revisa si los campos están, si no es así, no continua la función.
        return;
      }

      event.preventDefault();
      alert('¡Gracias por tu preferencia!');
      window.location.href = 'index.html';
    });