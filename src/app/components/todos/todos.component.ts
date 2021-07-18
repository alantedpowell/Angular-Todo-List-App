import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  count:number;
  firstName:string;
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.getUserName();
    this.todos = [
      {
        content: 'Contact Alan by e-mail at: alantedpowell@gmail.com',
        completed: false
      },
      {
        content: "Try out Alan's Angular Todo App",
        completed: true
      },
      {
        content: "Visit Alan's Portfolio",
        completed: true
      }
    ]

    this.count = this.todos.length;

  }

  getUserName() {
    this.firstName = prompt('What is your name? \n Pressing cancel will default your name to: "User".', "Your name is incredible. Type it here. Please?");
    if (this.firstName === "" || this.firstName == null || this.firstName === "Your name is incredible. Type it here. Please?") {
      this.firstName = "User";
    }
  }

  toggleCompletion(id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      this.count--;
      return v;
    })
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

  removeAllTodo() {
    this.todos = [];
  }

}
