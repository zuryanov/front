import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'}
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'},
    {id: 4, title: 'Срочно', color: '#F1128D'}
  ];

  static tasks: Task[] = [
    { id: 1,
      title: 'Залить бензин полный бак',
      completed: false,
      priority: TestData.priorities[2],
      category: TestData.categories[0],
      date: new Date('2022-10-12')
    },
    {
      id: 2,
      title: 'Потратить аванс',
      completed: false,
      priority: TestData.priorities[0],
      category: TestData.categories[2],
      date: new Date('2022-09-09')
    },
    {
      id: 3,
      title: 'Поиграть в футбол',
      completed: false,
      priority: TestData.priorities[3],
      category: TestData.categories[5],
      date: new Date('2022-11-01')
    },
    {
      id: 4,
      title: 'Сончас в обед',
      completed: false,
      priority: TestData.priorities[1],
      category: TestData.categories[9],
      date: new Date('2022-09-12')
    },
    {
      id: 5,
      title: 'Вкусно покушать',
      completed: true,
      priority: TestData.priorities[3],
      category: TestData.categories[7],
      date: new Date('2022-10-13')
    },
    {
      id: 6,
      title: 'Сладко поспать',
      completed: true,
      priority: TestData.priorities[2],
      category: TestData.categories[4],
      date: new Date('2022-10-15')
    }
  ];
}
