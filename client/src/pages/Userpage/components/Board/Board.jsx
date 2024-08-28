import React from 'react';
import Column from './Column';
import Card from './Card';
import useTasks from '../../../../hooks/useTasks';

export default function Board() {
  const { pendingTasks, inProgressTasks, completedTasks, loading, error } = useTasks();

  if (loading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-full">Error loading tasks</div>;
  }

  return (
    <section className='flex w-full gap-28 justify-between min-h-80 max-md:flex-col'>
      <Column 
        title="Pending" 
        imageSrc="/icons/pending.svg" 
        count={pendingTasks.length}
      >
        {pendingTasks.map(task => (
          <Card 
            key={task.id} 
            title={task.title} 
            description={task.description} 
            priority={task.priority} 
            createdAt={task.createdAt}
          />
        ))}
      </Column>

      <Column 
        title="In-Progress" 
        imageSrc="/icons/in-progress.svg" 
        count={inProgressTasks.length}
      >
        {inProgressTasks.map(task => (
          <Card 
            key={task.id} 
            title={task.title} 
            description={task.description} 
            priority={task.priority} 
            createdAt={task.createdAt}
          />
        ))}
      </Column>

      <Column 
        title="Completed" 
        imageSrc="/icons/completed.svg" 
        count={completedTasks.length}
      >
        {completedTasks.map(task => (
          <Card 
            key={task.id} 
            title={task.title} 
            description={task.description} 
            priority={task.priority} 
            createdAt={task.createdAt}
          />
        ))}
      </Column>
    </section>
  );
}