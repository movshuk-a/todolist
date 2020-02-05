import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete"
import TextField from "@material-ui/core/TextField";
import Save from "@material-ui/icons/Save";

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            todoTitle: props.todo.title
        };
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onTitleClick = this.onTitleClick.bind(this);
        this.onChangeOldTitle = this.onChangeOldTitle.bind(this);
        this.onUpdateTitle = this.onUpdateTitle.bind(this);

    }

    onChangeCheckbox(event) {
        const {todo, updateTodo} = this.props;

        const newTodo = {
            ...todo,
            status: (event.target.value === "false") ? 'DONE' : 'TODO'
        };
        updateTodo(newTodo);
    }

    onTitleClick() {
        this.setState({
            isEdit: true
        });
    }

    onChangeOldTitle(event) {
        this.setState({
            todoTitle: event.target.value
        });
    }

    onUpdateTitle() {
        const {todo, updateTodo} = this.props;

        const newTodo = {
            ...todo,
            title: this.state.todoTitle
        };
        updateTodo(newTodo);

        this.setState({
            isEdit: false
        });
    }

    render() {
        const {todo, deleteTodoById} = this.props;
        return (
            <div
                style={{
                    borderRadius: '8px',
                    background: 'lightgray',
                    color: 'blackgray',
                    margin: '2vh 16vh',
                    display: 'flex',
                    border: '2px solid #fff',
                    padding: '10px',
                    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
                }}
            >
                <Checkbox 
                        value={todo.status === 'DONE'}
                          onChange={this.onChangeCheckbox}
                />


                <div 
                    style={{
                        whiteSpace: 'nowrap', /* Запрещаем перенос строк */
                        overflow: 'overlay',
                        textOverflow: 'ellipsis',
                        justifyContent: 'space-between',
                        paddingTop: '10px'
                        }}
                >
                    {this.state.isEdit
                        ? (
                            <div>
                                    <TextField 
                                        value={this.state.todoTitle}
                                        onChange={this.onChangeOldTitle}      
                                    />
                                <IconButton onClick={this.onUpdateTitle}>
                                    <Save />
                                </IconButton>
                            </div>
                        )
                        : (
                            <div onClick={this.onTitleClick}>
                                {todo.title}
                            </div>
                        )
                    }
                </div>


                <IconButton 
                     style={{
                        marginInlineStart: 'auto'
                        }}
                        
                        onClick={() => deleteTodoById(todo.id)}>
                        <Delete />
                </IconButton>

        </div>
        );
    }
}

export default TodoComponent;