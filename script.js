const events = {
  ceremony: { title: 'Arvind & Maile — Wedding Ceremony', start: '20261023T090000', end: '20261023T103000', location: 'Hindu Temple Society of New Mexico, 8418 Zuni Road Southeast, Albuquerque, NM 87108' },
  reception: { title: 'Arvind & Maile — Wedding Reception', start: '20261023T160000', end: '20261023T180000', location: 'Hyde Park Lodge, Albuquerque, New Mexico' }
};
// Calendar times are local to Albuquerque (America/Denver). Reception end time is a placeholder.
for (const button of document.querySelectorAll('[data-event]')) {
  button.addEventListener('click', () => {
    const event = events[button.dataset.event];
    const params = new URLSearchParams({ action: 'TEMPLATE', text: event.title, dates: `${event.start}/${event.end}`, ctz: 'America/Denver', location: event.location, details: 'Wedding invitation for Arvind and Maile.' });
    window.open(`https://calendar.google.com/calendar/render?${params}`, '_blank', 'noopener,noreferrer');
  });
}
document.querySelector('#share').addEventListener('click', async () => {
  if (navigator.share) { try { await navigator.share({ title: 'Arvind & Maile | Wedding Invitation', url: location.href }); } catch (_) {} }
  else if (navigator.clipboard) { await navigator.clipboard.writeText(location.href); const button = document.querySelector('#share'); button.textContent = 'Link copied!'; setTimeout(() => button.textContent = 'Share invitation', 2500); }
});
