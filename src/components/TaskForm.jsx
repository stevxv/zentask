import React, {useState} from 'react'

import './TaskForm.css'
import Tag from './Tag'

const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState({
        task: '',
        status: 'zen',
        tags: []
    });

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return {...prev, tags: filterTags}
            })
        } else {
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]}
            })
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setTaskData(prev => {
            return {...prev, [name]: value}
        })
    };

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(taskData);
        setTasks(prev => {
            return [...prev, taskData]
        });
        setTaskData({
            task: '',
            status: 'zen',
            tags: []
        })
    }
    
  return (
    <div className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type="text" name='task' value={taskData.task} className="task_input" placeholder="Agregar una tarea" onChange={handleChange} required />

            <div className='task_form_bottom_line'>
                <div>
                    <Tag tagName="Trabajo" selectTag={selectTag} selected={checkTag('Trabajo')} />
                    <Tag tagName="Estudios" selectTag={selectTag} selected={checkTag('Estudios')} />
                    <Tag tagName="Personal" selectTag={selectTag} selected={checkTag('Personal')} />
                    <Tag tagName="Hogar" selectTag={selectTag} selected={checkTag('Hogar')} />
                    <Tag tagName="Salud" selectTag={selectTag} selected={checkTag('Salud')} />
                </div>

                <div>
                <select name="status" value={taskData.status} className='task_status' onChange={handleChange}>
                    <option value="zen">Zen Mode</option>
                    <option value="flow">Flow Mode</option>
                    <option value="calm">Calm Mode</option>
                </select>
                <button type="submit" className='task_submit'>
                    Agregar
                </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default TaskForm