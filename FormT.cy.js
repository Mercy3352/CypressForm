describe('Проверка формы обратной связи', () => {
  it('Открытие страницы, ввод данных в форму', () => {
    // Открытие страницы
    cy.visit('https://kontaktnaya-forma.testograf.ru');

    // Ввод данных в текстовые поля
    cy.get('div.textfield___c13e5c354deb256560e7') 
      .eq(0) // Имя
      .type('User Super'); 

    cy.get('div.textfield___c13e5c354deb256560e7') 
      .eq(1) // email 
      .type('USer@.com'); 

    cy.get('div.textfield___c13e5c354deb256560e7') 
      .eq(2) // Телефон
      .type('88005553555'); 

    // Клик по дропдаун-меню
    cy.get('div.small___b5d0eb88663e4783b87a') 
      .click();

    // Выбор значения "Заказ" 
    cy.contains('div', 'Заказ') 
      .click() 

    cy.get('div.textfield___c13e5c354deb256560e7') 
      .eq(3) // Ваше сообщение
      .type('привет'); 
    
    cy.get('div.action___d45ea1f1799f107d8ccf') // Отправить
      .click();

    cy.wait(2000); 

    // Скриншот успешного результата
    cy.screenshot('Successful_submission');
  });
});
