import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  todoList: TodoItem[] = [];
  newTask: string = '';

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.newTask = target?.value ?? '';
  }

  addNewTask(): void {
    if (this.newTask.trim() === '') {
      return;
    }

    const newTodoItem: TodoItem = {
      id: Date.now(),
      task: this.newTask,
      completed: false,
    };

    this.todoList.push(newTodoItem);
    this.newTask = '';
  }

  toggleCompleted(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed;
  }

  delete(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
}
