import { Dish } from './dishes/dish';
import { LoginInfo } from './login/loginInfo';

export const dishes: Dish[] = [{
                        favourite: false,
                        image: '../../../assets/images/basil-fried.jpg',
                        likes: 21,
                        options: [
                                { name: 'Tofu', price: 1, selected: false },
                                { name: 'Chiken', price: 1, selected: false },
                                { name: 'Pork', price: 2, selected: false }],
                        orderDescription:
                        'Lorem ipsum dolor sit amet. Proin fermentum lobortis neque. ' +
                        'Pellentesque habitant morbi tristique.',
                        orderName: 'Red Curry',
                        price: 5.90,
                        categories: {
                                main: true,
                                starter: false,
                                dessert: false,
                                noodle: true,
                                rice: false,
                                curry: true,
                                vegan: true,
                                vegetarian: true,
                        },
                }, {
                        favourite: false,
                        image: '../../../assets/images/garlic-paradise.jpg',
                        likes: 10,
                        options: [
                                { name: 'Tofu', price: 1, selected: false },
                                { name: 'Chiken', price: 1, selected: false },
                                { name: 'Pork', price: 2, selected: false }],
                        orderDescription:
                          'Consectetur adipiscing elit. Nulla id viverra turpis, sed eleifend dui. ' +
                          'Proin fermentum lobortis neque. Pellentesque habitant morbi tristique.',
                        orderName: 'Purple Curry',
                        price: 9.00,
                        categories: {
                                main: false,
                                starter: true,
                                dessert: false,
                                noodle: false,
                                rice: true,
                                curry: true,
                                vegan: false,
                                vegetarian: false,
                        },
                }, {
                        favourite: false,
                        image: '../../../assets/images/green-curry.jpg',
                        likes: 61,
                        options: [
                                { name: 'Tofu', price: 1, selected: false },
                                { name: 'Chiken', price: 1, selected: false },
                                { name: 'Pork', price: 2, selected: false }],
                        orderDescription:
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                          'Nulla id viverra turpis, sed eleifend dui. Proin fermentum lobortis neque.',
                        orderName: 'Green Curry',
                        price: 7.60,
                        categories: {
                                main: false,
                                starter: false,
                                dessert: true,
                                noodle: false,
                                rice: true,
                                curry: false,
                                vegan: true,
                                vegetarian: true,
                        },
                }, {
                        favourite: false,
                        image: '../../../assets/images/dish.png',
                        likes: 48,
                        options: [
                                { name: 'Tofu', price: 1, selected: false },
                                { name: 'Chiken', price: 1, selected: false },
                                { name: 'Pork', price: 2, selected: false }],
                        orderDescription: 'Lorem ipsum dolor. Pellentesque habitant morbi tristique.',
                        orderName: 'Yellow Curry',
                        price: 8.50,
                        categories: {
                                main: true,
                                starter: false,
                                dessert: false,
                                noodle: true,
                                rice: true,
                                curry: true,
                                vegan: true,
                                vegetarian: true,
                        },
                }];

export const users: LoginInfo[] = [{
                        username: 'user1',
                        password: 'password',
                        name: 'Name1',
                      }, {
                        username: 'user2',
                        password: 'password',
                        name: 'Name2',
                      }, {
                        username: 'user3',
                        password: 'password',
                        name: 'Name3',
                      }];