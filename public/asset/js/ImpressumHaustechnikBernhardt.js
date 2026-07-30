const domain = window.location.hostname;

const impressumUrl = 'https://sharp-noyce.82-165-243-146.plesk.page/api/collections/Impressen/records/hu9qw90fadbjpki';
const telefonUrl = `https://sharp-noyce.82-165-243-146.plesk.page/api/collections/Handynummern/records?filter=(Domain='${domain}')`;

Promise.all([
  fetch(impressumUrl).then(r => r.json()),
  fetch(telefonUrl).then(r => r.json())
])
.then(([impressum, telefon]) => {
  const item = telefon.items && telefon.items[0];

  document.getElementById('impressum').innerHTML = `

    <p><strong>${domain}</strong> – ist ein Vermittlungsservice in Kooperation mit:</p>

    <p>
      <strong>${impressum.Firma || ''}</strong><br>
      ${impressum.Strasse || ''} ${impressum.Hausnummer || ''}<br>
      ${impressum.PLZ || ''} ${impressum.Ort || ''}
    </p>

    <p>Vertreten durch:<br>${impressum.CEO || ''}</p>

    <p>Persönlich haftende Gesellschafterin:<br>${impressum.Gesellschafter || ''}</p>

    <p>
      Gericht: ${impressum.Gericht || ''}<br>
      Registernummer: ${impressum.HRNummer || ''}
    </p>

    <p>USt.-ID: ${impressum.UstID || ''}</p>

    <p>Aufsichtsbehörde: ${impressum.Aufsichtsbehoerde || ''}</p>

    ${
      item
        ? `<p><strong>Telefon:</strong> <a href="tel:${item.Handynummer}">${item.Handynummer_Fancy}</a></p>`
        : ''
    }
  `;

  // Callbar
  if (item) {
    const bar = document.createElement('div');
    bar.className = 'call-bar';
    bar.innerHTML = `<a href="tel:${item.Handynummer}">${item.Handynummer_Fancy}</a>`;
    document.body.appendChild(bar);
  }
})
.catch(err => {
  document.getElementById('impressum').innerHTML = 'Fehler beim Laden';
  console.error(err);
});