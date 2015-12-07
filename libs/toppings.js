const plain = [],
      pepperoni = ['pepperoni'],
      combo1 = ['pineapple', 'feta'],
      combo2 = ['pepperoni', 'sausage', 'people'];

let favoriteCombo = combo1; // won't be exported

export { plain,
  pepperoni,
  combo1 as pineappleAndFeta,
  combo2 as meatLovers }
