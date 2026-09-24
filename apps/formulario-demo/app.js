const form = document.getElementById("registro-form");
const successPanel = document.getElementById("success");
const successSummary = document.getElementById("success-summary");
const resetBtn = document.getElementById("reset-btn");

const FIELD_NAMES = ["nombres", "correo", "cedular"];

const messages = {
  nombres: "Ingresa al menos 2 caracteres.",
  correo: "Ingresa un correo válido.",
  cedular: "Ingresa un valor válido (8 a 20 caracteres).",
};

function showError(name, text) {
  const el = document.querySelector(`[data-error-for="${name}"]`);
  if (el) el.textContent = text || "";
}

function clearErrors() {
  FIELD_NAMES.forEach((n) => showError(n, ""));
}

function validate(formData) {
  clearErrors();
  let ok = true;

  const nombres = formData.get("nombres")?.trim() ?? "";
  const correo = formData.get("correo")?.trim() ?? "";
  const cedular = formData.get("cedular")?.trim() ?? "";

  if (nombres.length < 2) {
    showError("nombres", messages.nombres);
    ok = false;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(correo)) {
    showError("correo", messages.correo);
    ok = false;
  }

  const cedularRe = /^[0-9+\s()-]{8,20}$/;
  if (!cedularRe.test(cedular)) {
    showError("cedular", messages.cedular);
    ok = false;
  }

  return ok ? { nombres, correo, cedular } : null;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = validate(new FormData(form));
  if (!data) return;

  // TODO backend: POST { nombres, correo, cedular } al API
  successSummary.textContent = `${data.nombres} · ${data.correo} · ${data.cedular}`;
  form.hidden = true;
  successPanel.hidden = false;
});

resetBtn.addEventListener("click", () => {
  form.reset();
  clearErrors();
  form.hidden = false;
  successPanel.hidden = true;
});
