document.addEventListener('DOMContentLoaded', function() {
    console.log('iGEM 2025 homepage loaded');
});
function showDetails(name, role, bio) {
    document.getElementById("modal-name").innerText = name;
    document.getElementById("modal-role").innerText = role;
    document.getElementById("modal-bio").innerText = bio;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}