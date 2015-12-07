import dr from 'lodash-es/array/dropRight';
import last from 'lodash-es/array/last';

export class Pizza {
  constructor(toppings) {
    this.toppings = toppings;
  }

  eat() {
    const toppings = this.toppings,
      length = this.length,
      str = length < 2
        ? `${toppings.toString()}`
        : length > 2
          ? `${dr(toppings, 1).join(', ')}, and ${last(toppings)}`
          : `${toppings.join(' and ')}`;

    return `\ndang, that pizza with the ${str} is good af`;
  }
}
