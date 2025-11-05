const SITE_DATA = {
  whatsapp: 'https://wa.me/5587988352330',
  youtube: 'https://www.youtube.com/@pgfns'
};

function applySiteLinks() {
  document.querySelectorAll('[data-youtube]').forEach(el => {
    el.href = SITE_DATA.youtube;
  });
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.href = SITE_DATA.whatsapp;
  });
}