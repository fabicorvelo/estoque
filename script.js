document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseenter', function() {
        const quantity = this.getAttribute('data-quantity');
        const validity = this.getAttribute('data-validity');

        const infoBox = document.getElementById('info-box');
        infoBox.innerHTML = `<p>Quantidade em Estoque: ${quantity}</p><p>Validade: ${validity}</p>`;
        infoBox.style.display = 'block';

        const rect = this.getBoundingClientRect();
        infoBox.style.left = `${rect.left + window.scrollX}px`;
        infoBox.style.top = `${rect.bottom + window.scrollY}px`;
    });

    product.addEventListener('mouseleave', function() {
        document.getElementById('info-box').style.display = 'none';
    });
});

// Modal para cadastrar produto
const modal = document.getElementById('modal');
const addProductBtn = document.getElementById('add-product-btn');
const closeModal = document.querySelector('.close');

// Mostrar modal
addProductBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Fechar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cadastrar produto
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const productValidity = document.getElementById('product-validity').value;

    // Criar novo produto
    const newProduct = document.createElement('div');
    newProduct.classList.add('product');
    newProduct.setAttribute('data-quantity', productQuantity);
    newProduct.setAttribute('data-validity', productValidity);
    newProduct.innerHTML = `<h2>${productName}</h2>`;

    // Adicionar eventos de hover para o novo produto
    newProduct.addEventListener('mouseenter', function() {
        const quantity = this.getAttribute('data-quantity');
        const validity = this.getAttribute('data-validity');

        const infoBox = document.getElementById('info-box');
        infoBox.innerHTML = `<p>Quantidade em Estoque: ${quantity}</p><p>Validade: ${validity}</p>`;
        infoBox.style.display = 'block';

        const rect = this.getBoundingClientRect();
        infoBox.style.left = `${rect.left + window.scrollX}px`;
        infoBox.style.top = `${rect.bottom + window.scrollY}px`;
    });

    newProduct.addEventListener('mouseleave', function() {
        document.getElementById('info-box').style.display = 'none';
    });

    // Adicionar o novo produto à lista
    document.getElementById('product-list').appendChild(newProduct);

    // Fechar modal e limpar formulário
    modal.style.display = 'none';
    document.getElementById('product-form').reset();
});
