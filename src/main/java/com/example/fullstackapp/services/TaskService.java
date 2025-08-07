package com.example.fullstackapp.services;

import com.example.fullstackapp.models.Task;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;

@Service
public class TaskService {


    private final List<Task> tasks;

    public TaskService() {
        tasks = new ArrayList<>();
    }

    public List<Task> getTasks() {
        Task task1 = new Task(UUID.randomUUID(), "Sample Task", true);
        Task task2 = new Task(UUID.randomUUID(), "Another Task", true);
        Task task3 = new Task(UUID.randomUUID(), "Sample Task", true);

        tasks.add(task1);
        tasks.add(task2);
        tasks.add(task3);

        return tasks;
    }

    public Task createTask(String title, Boolean completed) {
        return new Task(UUID.randomUUID(), title, completed);
    }
}
