const TOTAL_STEPS = 5;
let currentStep = 1;

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progressFill = document.getElementById('progressFill');

function renderStep() {
  document.querySelectorAll('.onb-step').forEach(step => {
    step.classList.toggle('active', Number(step.dataset.step) === currentStep);
  });
  document.querySelectorAll('.p-step').forEach(step => {
    const num = Number(step.dataset.step);
    step.classList.toggle('active', num === currentStep);
    step.classList.toggle('done', num < currentStep);
  });

  progressFill.style.width = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 92 + '%';

  prevBtn.style.opacity = currentStep === 1 ? '0' : '1';
  prevBtn.style.pointerEvents = currentStep === 1 ? 'none' : 'auto';

  nextBtn.textContent = currentStep === TOTAL_STEPS ? 'Confirm Booking' : 'Continue';
}

nextBtn.addEventListener('click', () => {
  if (currentStep < TOTAL_STEPS) {
    currentStep++;
    renderStep();
  } else {
    nextBtn.textContent = 'Booking Confirmed ✓';
    nextBtn.disabled = true;
    nextBtn.style.background = '#17B892';
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    renderStep();
  }
});

// Choice cards (single-select within their group)
document.querySelectorAll('.choice-grid').forEach(group => {
  group.querySelectorAll('.choice-card').forEach(card => {
    card.addEventListener('click', () => {
      group.querySelectorAll('.choice-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
});

// Date picker on step 3
document.querySelectorAll('.onb-step[data-step="3"] .date-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.onb-step[data-step="3"] .date-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

// OTP auto-advance
document.querySelectorAll('.otp-row').forEach(row => {
  const inputs = row.querySelectorAll('input');
  inputs.forEach((input, i) => {
    input.addEventListener('input', () => {
      if (input.value && inputs[i + 1]) inputs[i + 1].focus();
    });
  });
});

// Verify buttons
const verifyEmailBtn = document.getElementById('verifyEmailBtn');
if (verifyEmailBtn) {
  verifyEmailBtn.addEventListener('click', () => {
    const status = document.getElementById('emailStatus');
    status.textContent = 'Verified';
    status.classList.remove('pending');
    status.classList.add('verified');
  });
}
const verifyWaBtn = document.getElementById('verifyWaBtn');
if (verifyWaBtn) {
  verifyWaBtn.addEventListener('click', () => {
    const status = document.getElementById('waStatus');
    status.textContent = 'Verified';
    status.classList.remove('pending');
    status.classList.add('verified');
  });
}

renderStep();
