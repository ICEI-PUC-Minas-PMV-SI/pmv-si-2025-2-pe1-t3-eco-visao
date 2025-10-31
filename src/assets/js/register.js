const avatarInput = document.getElementById("avatarInput");
const avatarPreview = document.getElementById("avatarPreview");
const avatarPlaceholder = document.getElementById("avatarPlaceholder");

avatarInput.addEventListener("change", () => {
  const file = avatarInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      avatarPreview.src = reader.result;
      avatarPreview.classList.remove("hidden");
      avatarPlaceholder.classList.add("hidden");
    };
    reader.readAsDataURL(file);
  }
});

const registerForm = document.getElementById("registerForm");
const errorMsg = document.getElementById("errorMsg");
const errorText = document.getElementById("errorText");
const successMsg = document.getElementById("successMsg");

const API_URL = "http://localhost:3000/users";

async function registerUser(user) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });
    if (!res.ok) throw new Error("Erro ao cadastrar usuário");
    return res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const address = document.getElementById("address").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const avatar = avatarPreview.src || "";

  if (password !== confirmPassword) {
    errorText.textContent = "As senhas não coincidem.";
    errorMsg.classList.remove("hidden");
    successMsg.classList.add("hidden");
    return;
  }

  const newUser = { firstName, lastName, email, cpf, address, birthdate, password, avatar };

  try {
    await registerUser(newUser);

    errorMsg.classList.add("hidden");
    successMsg.classList.remove("hidden");

    registerForm.reset();
    avatarPreview.classList.add("hidden");
    avatarPlaceholder.classList.remove("hidden");

    window.location.href = "login.html";
  } catch (err) {
    errorText.textContent = "Erro ao cadastrar. Tente novamente.";
    errorMsg.classList.remove("hidden");
    successMsg.classList.add("hidden");
  }
});
