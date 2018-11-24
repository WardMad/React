import React from "react";
import UniqueId from 'react-html-id';
import { inject, observer } from 'mobx-react'
import Edit from './Edit'


@inject('BooksStore')
@observer

class TodoLists extends React.Component {
    constructor(props) {
        super(props)
        UniqueId.enableUniqueIds(this);
        // this.state = {
        //     Localtodos: [{ id: this.nextUniqueId(), description: 'Run 12 km', done: false },
        //         { id: this.nextUniqueId(), description: 'Buy a lamb meat', done: false } ]
        // }
    }
    handleCheckbox = (e) => {
        this.props.BooksStore.changeBox(e.target.value)
    }

    handleDelete = (id, e) => {
        // let index = this.props.BooksStore.posts.data.findIndex((task) => {
        //     console.log(id)
        //     return task.id !== id
        // })
        // let indexOfTask = this.props.BooksStore.posts.data[index]

        // this.props.BooksStore.posts.data.splice(indexOfTask, 1)
        // console.log(index)
        this.props.BooksStore.deleteTask()
    }

    render() {

        const remove = <button className='delete' onClick={this.handleDelete} >X</button>
        const checkbox = <input type='checkbox' onChange={this.handleCheckbox} />
        const { id, description, deadline, done, changeEv } = this.props;

        return (

            <div className='list'>
                <ul>

                    <li>{checkbox} <label> {id} {description} {deadline} {done} {remove} </label> <Edit value={description} />  </li>
                    <input type='text' onChange={changeEv} defaultValue={description} />

                </ul>

            </div>
        );
    }
}

export default TodoLists;
