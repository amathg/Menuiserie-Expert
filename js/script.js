// ============ Menuiserie Expert — script principal ============

// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Marque le lien de nav actif selon la page courante
  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    if (a.dataset.page === here) a.classList.add('active');
  });

  // Accordéon FAQ
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (el) {
        if (el !== item) el.classList.remove('open');
      });
      item.classList.toggle('open', !wasOpen);
    });
  });

  // Formulaire de contact (Formspree)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var submitBtn = form.querySelector('button[type="submit"]');
      var endpoint = form.getAttribute('action') || '';

      if (endpoint.indexOf('VOTRE_ID_FORMSPREE') !== -1) {
        status.className = 'form-status err';
        status.textContent = "Formulaire non encore activé : remplacez VOTRE_ID_FORMSPREE dans contact.html par votre identifiant Formspree (voir README).";
        return;
      }

      submitBtn.disabled = true;
      var originalLabel = submitBtn.textContent;
      submitBtn.textContent = 'Envoi en cours...';

      fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          status.className = 'form-status ok';
          status.textContent = 'Message envoyé ! Je vous recontacte au plus vite.';
          form.reset();
        } else {
          return response.json().then(function (data) {
            throw new Error((data && data.errors) ? data.errors.map(function(x){return x.message;}).join(', ') : 'Erreur inconnue');
          });
        }
      }).catch(function (err) {
        status.className = 'form-status err';
        status.textContent = "L'envoi a échoué. Merci de m'appeler directement au 07 84 64 79 25, ou réessayez.";
        console.error(err);
      }).finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      });
    });
  }

  // Année dynamique dans le footer
  document.querySelectorAll('.current-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
