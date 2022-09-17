import { Injectable } from '@angular/core';
import {Category} from "../model/Category";
import {Task} from "../model/Task";
import {TestData} from "../data/TestData";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() { }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks)
  }

  fillTaskByCategory(category: Category) {
    const tasks =  TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }
}
