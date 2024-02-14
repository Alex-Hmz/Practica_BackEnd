import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid'
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks:Task[] = [{
        id: v4(),
        title: "first task",
        description: "some task",
        status: TaskStatus.PENDING,
    }];

    getAllTasks(){
        return this.tasks;
    }
    createtTask(title: string, description:string){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task);

        return task;
    }

    getTaskById(id: string): Task{
        return this.tasks.find(task => task.id === id)
    }

    updateTask(id:string, updateFields:UpdateTaskDto): Task{
        const task = this.getTaskById(id);  //Buscar tarea
        if(task != null){
            const newTask = Object.assign(task, updateFields);      //Combinar tareas
            this.tasks = this.tasks.map(task => task.id === id ? newTask : task)    //actualización
            return newTask;
        }else{
            return null;
        }
        
    }

    deletetTask(id:string) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
}
