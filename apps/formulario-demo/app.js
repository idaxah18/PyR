const form = document.getElementById("registro-form");
const successPanel = document.getElementById("success");
const successSummary = document.getElementById("success-summary");
const resetBtn = document.getElementById("reset-btn");

const messages = {
  nombre: "Ingresa al menos 2 caracteres.",
  correo: "Ingresa un correo válido.",
  celular: "Ingresa un celular válido (8 a 20 caracteres).",
};

function showError(name, text) {
  const el = document.querySelector(`[data-error-for="${name}"]`);
  if (el) el.textContent = text || "";
}

function clearErrors() {
  ["nombre", "correo", "celular"].forEach((n) => showError(n, ""));
}

function validate(formData) {
  clearErrors();
  let ok = true;

  const nombre = formData.get("nombre")?.trim() ?? "";
  const correo = formData.get("correo")?.trim() ?? "";
  const celular = formData.get("celular")?.trim() ?? "";

  if (nombre.length < 2) {
    showError("nombre", messages.nombre);
    ok = false;
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(correo)) {
    showError("correo", messages.correo);
    ok = false;
  }

  const phoneRe = /^[0-9+\s()-]{8,20}$/;
  if (!phoneRe.test(celular)) {
    showError("celular", messages.celular);
    ok = false;
  }

  return ok ? { nombre, correo, celular } : null;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = validate(new FormData(form));
  if (!data) return;

  successSummary.textContent = `${data.nombre} · ${data.correo} · ${data.celular}`;
  form.hidden = true;
  successPanel.hidden = false;
});

resetBtn.addEventListener("click", () => {
  form.reset();
  clearErrors();
  form.hidden = false;
  successPanel.hidden = true;
});
