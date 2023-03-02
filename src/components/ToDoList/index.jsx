import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const ToDoListStyle = styled.div`
    .input-group {
        margin-top: 50px;
        display: flex;
        border: 1px solid #ccc;
        heigth: 40px;
        input {
            flex: 1;
            padding: 0 10px;
            outline: none;
        }
        button {
            padding: 0 10px;
            background: #ccc;
            &:disabled {
                opacity: 0.2;
                cursor: no-drop;
            }
        }
    }
    .list-board {
        display: flex;
        gap: 30px;
        .board {
            flex: 1;
            .title {
                font-size: 30px;
                margin: 20px 0;
                font-weight: bold;
            }
            .items {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
        }
    }
`;
const ToDoList = ({ todo, onAdd, onCompleted, onDelete }) => {
    const listDoing = todo.filter((item) => !item.isCompleted);
    const listDone = todo.filter((item) => item.isCompleted);
    // console.log(todo);

    const [job, setJob] = useState('');
    const inputRef = useRef();

    const _onAdd = () => {
        onAdd(job.trim());
        setJob('');
        inputRef.current.focus();
    };

    const onKeyUp = (e) => {
        if (job.trim()) {
            if (e.key === 'Enter') {
                _onAdd();
            }
        }
    };

    return (
        <ToDoListStyle>
            <div className="input-group">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Công việc..."
                    value={job}
                    onKeyUp={onKeyUp}
                    onChange={(e) => setJob(e.target.value)}
                />
                <button disabled={!job.trim()} onClick={_onAdd}>
                    Thêm
                </button>
            </div>
            <div className="list-board">
                <div className="board">
                    <div className="title">Công việc đang làm</div>
                    <div className="items">
                        {listDoing.map((item) => (
                            <ToDoItem onCompleted={onCompleted} key={item.id} {...item} />
                        ))}
                    </div>
                </div>
                <div className="board">
                    <div className="title">Công việc đã hoàn thành</div>
                    <div className="items">
                        {listDone.map((item) => (
                            <ToDoItem onDelete={onDelete} key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </ToDoListStyle>
    );
};

const ToDoItemStyle = styled.div`
    display: flex;
    border: 1px solid #ccc;
    padding: 10px;
    .name {
        flex: 1;
    }
    .btn-delete {
        display: none;
    }
    button {
        border: 1px solid #ccc;
        padding: 0 10px;
        background: #ccc;
    }

    &.isCompleted {
        background: #eee;
        .btn-check {
            display: none;
        }
        .btn-delete {
            display: block;
        }
        .name {
            text-decoration: line-through;
        }
    }
`;
const ToDoItem = ({ id, name, isCompleted, onCompleted, onDelete }) => {
    return (
        <ToDoItemStyle className={isCompleted ? 'isCompleted' : ''}>
            <div className="name">{name}</div>
            <button className="btn-check" onClick={() => onCompleted(id)}>
                ✔
            </button>
            <button className="btn-delete" onClick={() => onDelete(id)}>
                ✖
            </button>
        </ToDoItemStyle>
    );
};

export default ToDoList;
