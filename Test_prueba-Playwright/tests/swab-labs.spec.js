import { test, expect } from '@playwright/test';

test('entrar al login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  
  await expect(page).toHaveTitle(/Swag Labs/);
});
 

test('ingresar al catalogo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByAltText('Sauce Labs Backpack')).toBeVisible();
});





