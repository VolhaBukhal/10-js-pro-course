import React, {FC} from 'react';
import {Task} from 'types/types';
import style from './TodoItem.module.css'
import className from 'classnames/bind'

const cx = className.bind(style);

interface Props {
    task: Task;
    handleEdit: (event:React.MouseEvent<HTMLButtonElement>) => void;
    handleDelete: (event:React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoItem: FC<Props> = ({task, handleEdit, handleDelete}) => {
    return (
        <div className={style.TodoItem}>
            <div>{task.taskName}</div>
            <div className={style.TodoItemBtns}>
                <input type="checkbox" />
                <button onClick={handleEdit} className={cx('button', 'edit')}></button>
                <button onClick={handleDelete} className={cx('button', 'delete')}></button>
            </div>
            
        </div>
    );
};

export default TodoItem;