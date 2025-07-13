document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('.add-btn');
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close-btn');
  const saveBtn = document.querySelector('.save-btn');
  const tableBody = document.querySelector('tbody');

  addBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  saveBtn.addEventListener('click', () => {
    const nombre = document.getElementById('empresa-nombre').value.trim();
    const email = document.getElementById('empresa-email').value.trim();

    if (nombre && email) {
      const row = document.createElement('tr');
      row.innerHTML = \`
        <td>\${nombre}</td>
        <td>\${email}</td>
        <td>Activo</td>
        <td>
          <button class="deshabilitar">Deshabilitar</button>
          <button class="eliminar">Eliminar</button>
        </td>
      \`;
      tableBody.appendChild(row);
      attachDeleteEvent(row);
      modal.style.display = 'none';
      document.getElementById('empresa-nombre').value = '';
      document.getElementById('empresa-email').value = '';
    }
  });

  function attachDeleteEvent(row) {
    row.querySelector('.eliminar').addEventListener('click', () => {
      row.remove();
    });
  }

  document.querySelectorAll('.eliminar').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('tr').remove();
    });
  });
});
