// Class type toggle
document.querySelectorAll('.class-type-toggle button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.class-type-toggle button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Date picker
document.querySelectorAll('#datePicker .date-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#datePicker .date-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

// Time slots
document.querySelectorAll('#slotGrid .slot').forEach(slot => {
  if (slot.classList.contains('disabled')) return;
  slot.addEventListener('click', () => {
    document.querySelectorAll('#slotGrid .slot').forEach(s => s.classList.remove('active'));
    slot.classList.add('active');
  });
});

// Confirm booking
const confirmBtn = document.getElementById('confirmBooking');
if (confirmBtn) {
  confirmBtn.addEventListener('click', () => {
    confirmBtn.textContent = 'Demo Booked ✓';
    confirmBtn.style.background = '#17B892';
    confirmBtn.disabled = true;
  });
}
