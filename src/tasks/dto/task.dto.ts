import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"
import { TaskStatus } from "../task.entity"

export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string
    description: string
}

export class UpdateTaskDto{
    @IsOptional()
    @IsString()
    title?: string
    
    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsString()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus 
}