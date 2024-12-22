describe('Проверка формы обратной связи', () => {
  it('Открытие страницы, ввод некорректных данных в форму', () => {
    // Открытие страницы
    cy.visit('https://kontaktnaya-forma.testograf.ru');
    
    // Ввод данных в текстовые поля
    cy.get('div.textfield___c13e5c354deb256560e7') 
      .eq(0) // Имя
      .type('010'); 

    cy.get('div.textfield___c13e5c354deb256560e7') 
      .eq(1) // email 
      .type('$#Q%'); 

    cy.get('div.textfield___c13e5c354deb256560e7') 
      .eq(2) // Телефон
      .type('восемь восемьсот'); 

    // Клик по дропдаун-меню
    cy.get('div.small___b5d0eb88663e4783b87a') 
      .click();

    // Выбор значения 
    cy.contains('div', 'Жалоба') 
      .click() 

    cy.get('div.textfield___c13e5c354deb256560e7') 
      .eq(3) // Ваше сообщение
      .type('c'); 
    
    cy.get('div.action___d45ea1f1799f107d8ccf') // Отправить
      .click();

    // Ожидание появления сообщения об ошибке
    cy.get('div.error_message', { timeout: 5000 })
      .should('be.visible');
  });
});