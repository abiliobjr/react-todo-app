import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { remove, todoStatusChange } from './todoActions'

import IconButton from '../template/iconButton';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.renderRows = this.renderRows.bind(this)
    }
    renderRows(){
        const { remove, todoStatusChange } = this.props

        const list = this.props.list || []
        return list.map((todo, index) => (
            <tr key={todo._id} className={todo.done ? 'done' : ''}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style='warning' hide={!todo.done} icon='undo' onClick={()=> todoStatusChange(todo)} > </IconButton>
                    <IconButton style='success' hide={todo.done} icon='check' onClick={()=> todoStatusChange(todo)} > </IconButton>
                    <IconButton style='danger' icon='trash-o' onClick={() => remove(todo)} > </IconButton>
                </td>
            </tr>
        ))
    }
    render () {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({list: state.todo.list})

const mapDispatchToProps = dispatch => bindActionCreators({ remove, todoStatusChange }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)